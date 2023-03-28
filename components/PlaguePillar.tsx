"use client";

import { Fragment, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, Text } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { projects } from "../data/projects";


interface AnchorPoint {
  position: [number, number, number];
  rotation: [number, number, number];

}

const degToRad = (angle: number) => angle * (Math.PI / 180);


interface PlaguePillarProps {
  orbitalsEnabled: boolean;
}

const PlaguePillar = ({orbitalsEnabled} : PlaguePillarProps) => {
  const gltf = useLoader(GLTFLoader, "models/pillar.glb");
  const textures = useLoader(TextureLoader, projects.map((project) => project.asset));
  const { size } = useThree();
  const [ descriptionShown, setDescriptionShown ] = useState<number>();

  let scale =
    (Math.min(size.width, size.height) /
      Math.min(window.innerWidth, window.innerHeight)) *
    0.4;

  const handleClick = (event: ThreeEvent<MouseEvent>, index: number) => {
    event.stopPropagation();
    window.open(projects[index].link, "_blank");
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
        enabled={!orbitalsEnabled}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.4} />
      <pointLight position={[-10, 10, -10]} intensity={0.4} />
      <primitive object={gltf.scene} />
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
          <meshBasicMaterial map={texture} color="#B3B3B3" transparent></meshBasicMaterial>
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
        {projects[index].name} →</Text>
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

  // Reference to the canvas element
  const canvasRef = useRef<HTMLDivElement>(null);

  // Track the initial touch coordinates
  const [initialTouch, setInitialTouch] = useState({ x: 0, y: 0 });

  // Whether or not the canvas is currently being scrolled
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      // Set the initial touch coordinates on touch start
      setInitialTouch({ x: event.touches[0].clientX, y: event.touches[0].clientY });
    };

    const handleTouchMove = (event: TouchEvent) => {
      // Get the current touch coordinates and calculate the delta
      const currentTouch = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      const deltaX = Math.abs(currentTouch.x - initialTouch.x);
      const deltaY = Math.abs(currentTouch.y - initialTouch.y);

      // If the delta in the X direction is greater than the delta in the Y direction,
      // treat it as a horizontal scroll and disable canvas scrolling
      if (deltaX > deltaY) {
        console.log("horizontal scroll")
        setScrolling(false); // horizontal scroll, use OrbitControls
      } else {
        console.log("vertical scroll")

        // Get the top and bottom coordinates of the canvas element
        const canvasTop = canvasRef.current?.getBoundingClientRect().top ?? 0 + window.scrollY;
        const canvasBottom = canvasRef.current?.getBoundingClientRect().bottom ?? 0 + window.scrollY;

        // Check if the canvas is currently in view
        const isCanvasInView = window.scrollY >= canvasTop && window.scrollY < canvasBottom;

        // If the canvas is not in view, do nothing
        if (!isCanvasInView) {
          return;
        }

        // If the scroll direction is down, scroll to the bottom of the canvas
        if (window.scrollY > canvasTop) {//scroll to top
          window.scrollTo({ top: canvasTop, behavior: 'smooth' });
        } else { // If the scroll direction is up, scroll to the top of the canvas
          window.scrollTo({
            top: canvasRef.current?.getBoundingClientRect().bottom ?? 0,
            behavior: "smooth",
          });
        }
      }
    };

    // Add touch event listeners on component mount
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    // Remove touch event listeners on component unmount
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [initialTouch]);

  return (
    <div
      className="flex w-[100vw] justify-center relative min-h-sceen"
      onContextMenu={onCanvasContextMenu}
      ref={canvasRef}
    >
      <Canvas className="relative z-10 -translate-y-[7vh] -translate-x-[3vw] md:translate-x-0 md:translate-y-0" style={{pointerEvents: scrolling ? "none" : "auto"}}>
        <PlaguePillar orbitalsEnabled={scrolling} />
      </Canvas>
      <div className="absolute w-full h-full flex justify-center items-center -translate-x-[3vw] md:translate-x-0 -translate-y-[7vh] md:translate-y-0">
        <h1 className="font-display font-var-heading tracking-tight text-[70px] md:text-[110px] rotate-[67deg] translate-y-10 pb-[220px] md:pb-[250px] text-slate-200">
          am pass
        </h1>
      </div>
    </div>
  );
};

export default PlagueCanvas;
