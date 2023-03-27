"use client";

import { Fragment, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, Text } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { projects } from "../data/projects";
import { alternateProjects } from "../data/projects";
import { Audio, AudioLoader, AudioListener } from 'three';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib' 


interface AnchorPoint {
  position: [number, number, number];
  rotation: [number, number, number];
}

const degToRad = (angle: number) => angle * (Math.PI / 180);

const PlaguePillar = () => {
  const gltf = useLoader(GLTFLoader, "models/pillar.glb");
  const textures = useLoader(TextureLoader, projects.map((project) => project.asset));
  const alternateTextures = useLoader(TextureLoader, alternateProjects.map((project) => project.asset));
  const { size } = useThree();
  const [ descriptionShown, setDescriptionShown ] = useState<number>();
  const audioLoader = new AudioLoader();
  const audioListener = new AudioListener();
  const audio = new Audio(audioListener);
  

  const [ audioPlaying, setAudioPlaying ] = useState<boolean>(false);

  audioLoader.load('drgnopsks/drgnopsks.mp3', (buffer) => {
    audio.setBuffer(buffer);
    audio.setLoop(false);
    audio.setVolume(0.1);
  });

  let scale =
    (Math.min(size.width, size.height) /
      Math.min(window.innerWidth, window.innerHeight)) *
    0.4;

  const handleClick = (event: ThreeEvent<MouseEvent>, index: number) => {
    event.stopPropagation();
    window.open(audioPlaying ? alternateProjects[index].link : projects[index].link, "_blank");
  };

  const anchorPoints: AnchorPoint[] | [] = [
    
    { position: [0, 1.8, 0.8], rotation: [0, 0, 0] },
    { position: [0.8, 1.8, 0], rotation: [0, degToRad(90), 0] },
    { position: [0, 1.8, -0.8], rotation: [0, degToRad(180), 0] },
    { position: [-0.8, 1.8, 0], rotation: [0, degToRad(270), 0] },
  ];


  const meshRef = useRef<OrbitControlsImpl>(null); // Add type to meshRef
  const lastRotRef = useRef(0)

  useFrame(() => {
    if (meshRef.current && meshRef.current.getAzimuthalAngle) {
      const currentRotation = meshRef.current.getAzimuthalAngle();
      console.log(currentRotation - lastRotRef.current)
      // console.log(currentRotation - lastRotRef.current)
      if (currentRotation - lastRotRef.current > 0.17 && !audioPlaying) {
        console.log("playing")
        setTimeout(() => {
          setAudioPlaying(true)
        }, 1000)
        audio.play()
        return
      }

      lastRotRef.current = currentRotation
    }
  });

  audio.onEnded = () => {
    setAudioPlaying(false);
  }

  // ...

  return (
    <group scale={scale}  rotation={[degToRad(10), degToRad(-4), degToRad(22)]}>
      <OrbitControls
        ref={meshRef}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        dampingFactor={0.001}
        enableDamping={true}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.4} />
      <pointLight position={[-10, 10, -10]} intensity={0.4} />
      <primitive   object={gltf.scene} />
      {textures.map((texture, index) => (
        <Fragment key={index}>
        <mesh
          position={anchorPoints[index].position}
          rotation={anchorPoints[index].rotation}
          onClick={(event) => handleClick(event, index)}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
            setDescriptionShown(index);
          }}
          onPointerOut={() => {
            document.body.style.cursor = "auto";
            setDescriptionShown(undefined);
          }}
        >
          <planeBufferGeometry args={[1, 1]} />
          <meshBasicMaterial map={audioPlaying ? alternateTextures[index] : texture} color="#B3B3B3" transparent></meshBasicMaterial>
        </mesh>
        {descriptionShown === index && (
        <Text
        position={[anchorPoints[index].position[0], anchorPoints[index].position[1] - 1.5, anchorPoints[index].position[2] + 0.05]}
        rotation={[anchorPoints[index].rotation[0], anchorPoints[index].rotation[1], degToRad(-90)]}
        fontSize={.3}
        color="#080A0F"
        maxWidth={10}
        lineHeight={1}
        textAlign="left"
        anchorX="left"
        anchorY="middle"
        font="/IBMPlexMono-Medium.ttf"
      >
        {audioPlaying ? alternateProjects[index].name : projects[index].name} →</Text>
      )}
      
      </Fragment>
      ))}
    </group>
  );
};

const PlagueCanvas = () => {
  const onCanvasContextMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="flex w-[100vw] justify-center relative min-h-sceen"
      onContextMenu={onCanvasContextMenu}
    >
      <Canvas className="relative z-10">
        <PlaguePillar />
      </Canvas>
      <div className="absolute w-full h-full flex justify-center items-center">
        <h1 className="font-display text-[140px] md:text-[180px] rotate-[67deg] translate-y-10 pb-[200px] md:pb-[250px] text-slate-200">
          am pass 
        </h1>
      </div>
      
    </div>
  );
};

export default PlagueCanvas;
