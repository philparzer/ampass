"use client";

import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";

interface AnchorPoint {
  position: [number, number, number];
  rotation: [number, number, number];
}

const imageUrls = [
  "/positive-person.avif",
  "/positive-person.avif",
  "/positive-person.avif",
  "/positive-person.avif",
];

const degToRad = (angle: number) => angle * (Math.PI / 180);

const PlaguePillar = () => {
  const gltf = useLoader(GLTFLoader, "models/ampass-decimated-origin-set.glb");
  const textures = useLoader(TextureLoader, imageUrls);
  const { size, camera } = useThree();

  const onImageClick = (index: number) => {
    console.log(index);
  };

  let scale =
    (Math.min(size.width, size.height) /
      Math.min(window.innerWidth, window.innerHeight)) *
    0.4;

  const handleClick = (event: ThreeEvent<MouseEvent>, index: number) => {
    event.stopPropagation();
    onImageClick(index);
  };

  const anchorPoints: AnchorPoint[] | [] = [
    { position: [0, 1.8, 0.8], rotation: [0, 0, 0] },
    { position: [0.8, 1.8, 0], rotation: [0, degToRad(90), 0] },
    { position: [0, 1.8, -0.8], rotation: [0, degToRad(180), 0] },
    { position: [-0.8, 1.8, 0], rotation: [0, degToRad(270), 0] },
  ];

  return (
    <group scale={scale} rotation={[degToRad(10), degToRad(-4), degToRad(22)]}>
      <OrbitControls
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
      <primitive object={gltf.scene} />
      {textures.map((texture, index) => (
        <mesh
          key={index}
          position={anchorPoints[index].position}
          rotation={anchorPoints[index].rotation}
          onClick={(event) => handleClick(event, index)}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "auto";
          }}
        >
          <planeBufferGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} color="#A5A5A5"></meshBasicMaterial>
        </mesh>
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
