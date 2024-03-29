"use client";

import { Fragment, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, Text, Html } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { projects } from "../data/projects";
import { Group } from "three";
import { motion } from "framer-motion";
import useIsIos from "../hooks/useIsIos";
import { Suspense } from "react"

const threshold = 50; //magic number that acts as a scroll threshold for x or y scroll decision

interface AnchorPoint {
  position: [number, number, number];
  rotation: [number, number, number];
}

const degToRad = (angle: number) => angle * (Math.PI / 180);

interface PlaguePillarProps {
  orbitalsEnabled: boolean;
}

const randProjects = projects.sort(() => Math.random() - 0.5);

const PlaguePillar = ({ orbitalsEnabled }: PlaguePillarProps) => {
  
  const gltf = useLoader(GLTFLoader, "models/pillar.glb");
  const textures = useLoader(
    TextureLoader,
    randProjects.map((project) => project.asset)
  );
  const { size, camera } = useThree();
  const [descriptionShown, setDescriptionShown] = useState<number>(0);
  const [currentlyVisible, setCurrentlyVisible] = useState([0, 1, 2, 3]);
  const turnCountRef = useRef(0);
  const isAutoRotatingRef = useRef(true);

  // Scale the pillar based on the window size
  let scale =
    (Math.min(size.width, size.height) /
      Math.min(window.innerWidth, window.innerHeight)) *
    0.4;

  // Handles clicking on a project and navigates to its page
  const handleClick = (event: ThreeEvent<MouseEvent>, index: number) => {
    event.stopPropagation();
    console.log("clicked on project", index);
    window.open(randProjects[currentlyVisible[descriptionShown]].link, "_blank");
  };

  // Stop autorotate after 2 seconds
  useEffect(() => {
      setTimeout(() => {
        isAutoRotatingRef.current = false;
      }, 50);
  }, [isAutoRotatingRef]);
  
  // Handles spinning the pillar and updates the currently visible projects
  useEffect(() => {
    turnCountRef.current += 1;
  
    if (turnCountRef.current > 3) {
      turnCountRef.current = 0;
  
      // Calculate the start and end indices for the next set of projects
      const startIdx = (currentlyVisible[currentlyVisible.length - 1] + 1) % randProjects.length;
      const endIdx = (startIdx + 4) % randProjects.length;
  
      // Get the next 4 project indices, wrapping around if necessary
      let newCurrentlyVisible;
      if (endIdx > startIdx) { // no wraparound
        newCurrentlyVisible = Array.from({ length: 4 }, (_, i) => (startIdx + i) % randProjects.length);
      } else { // wraparound
        newCurrentlyVisible = [
          ...Array.from({ length: randProjects.length - startIdx }, (_, i) => startIdx + i),
          ...Array.from({ length: endIdx }, (_, i) => i),
        ];
      }
  
      // Update the currently visible projects' indices
      setCurrentlyVisible(newCurrentlyVisible);
    }
  }, [descriptionShown]);
  
  

  // Define the anchor points for each side of the pillar
  const anchorPoints: AnchorPoint[] | [] = [
    { position: [0, 1.8, 0.8], rotation: [0, 0, 0] },
    { position: [0.8, 1.8, 0], rotation: [0, degToRad(90), 0] },
    { position: [0, 1.8, -0.8], rotation: [0, degToRad(180), 0] },
    { position: [-0.8, 1.8, 0], rotation: [0, degToRad(270), 0] },
  ];

  const groupRef = useRef<Group>(null);

  useFrame(() => {
    //set project description based on camera angle
    if (!groupRef.current) return;

    // get the angle between the camera and the pillar
    const azimuthAngle = Math.atan2(
      camera.position.x - groupRef.current.position.x,
      camera.position.z - groupRef.current.position.z
    );

    if (azimuthAngle >= -1 && azimuthAngle < 0.4) {
      if (descriptionShown !== 0) {
        setDescriptionShown(0);
      }
    } else if (azimuthAngle >= 0.4 && azimuthAngle < 2) {
      if (descriptionShown !== 1) {
        setDescriptionShown(1);
      }
    } else if (azimuthAngle >= 2 || azimuthAngle <= -2.8) {
      if (descriptionShown !== 2) {
        setDescriptionShown(2);
      }
    } else {
      if (descriptionShown !== 3) {
        setDescriptionShown(3);
      }
    }
  });

  return (
    <group
      scale={scale}
      ref={groupRef}
      rotation={[degToRad(10), degToRad(-4), degToRad(22)]}
    >
      {/* Disable orbit controls if orbitals are enabled */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        dampingFactor={0.005}
        enableDamping={true}
        enabled={!orbitalsEnabled}
        autoRotate={isAutoRotatingRef.current}
        autoRotateSpeed={5}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.4} />
      <pointLight position={[-10, 10, -10]} intensity={0.4} />
      <primitive object={gltf.scene} />
      {currentlyVisible.map((projectIndex, index) => (
        <Fragment key={Math.random()}>
          {/* Create a mesh for each pillar */}
          <mesh
            userData={{id: "pillar"}}
            position={anchorPoints[index].position}
            rotation={anchorPoints[index].rotation}
            onPointerDown={(event) => handleClick(event, index)}
            onPointerOver={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              document.body.style.cursor = "auto";
            }}
          >
            <planeBufferGeometry args={[1, 1]} />
            <meshBasicMaterial
              map={textures[currentlyVisible[index]]}
              color="#B3B3B3"
              transparent
            ></meshBasicMaterial>
          </mesh>
          {/* Show the project name when hovering over a pillar */}
          {descriptionShown === index && (
            <Text //TODO: look into drei HTML ele
              position={[
                anchorPoints[index].position[0],
                anchorPoints[index].position[1] - 1.5,
                anchorPoints[index].position[2] + 0.05,
              ]}
              rotation={[
                anchorPoints[index].rotation[0],
                anchorPoints[index].rotation[1],
                degToRad(-90),
              ]}
              
              onPointerDown={(event) => handleClick(event, index)}
              onPointerOver={() => {
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                document.body.style.cursor = "auto";
              }}
              fontSize={0.3}
              color="#080A0F"
              maxWidth={10}
              lineHeight={1}
              textAlign="left"
              anchorX="left"
              anchorY="middle"
              font="/IBMPlexMono-Medium.ttf"
            >
              ← {randProjects[currentlyVisible[descriptionShown]].name}{" "}
            </Text>
          )}
        </Fragment>
      ))}
    </group>
  );
};

const PlagueCanvas = () => {
  const isIos = useIsIos();

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

      setInitialTouch({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      });

    };

    const handleTouchMove = (event: TouchEvent) => {
      // Get the current touch coordinates and calculate the delta
      const currentTouch = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };

      const deltaX = Math.abs(currentTouch.x - initialTouch.x);
      const deltaY = Math.abs(currentTouch.y - initialTouch.y);
      

      // If the delta in the X direction is greater than the delta in the Y direction,
      // treat it as a horizontal scroll and disable canvas scrolling
      if (deltaX + threshold > deltaY ) {
        setScrolling(false); // horizontal scroll, use OrbitControls
      } else {
        // Get the top and bottom coordinates of the canvas element
        const canvasTop =
          canvasRef.current?.getBoundingClientRect().top ?? 0 + window.scrollY;
        const canvasBottom =
          canvasRef.current?.getBoundingClientRect().bottom ??
          0 + window.scrollY;

        // Check if the canvas is currently in view
        const isCanvasInView =
          window.scrollY >= canvasTop && window.scrollY < canvasBottom;

        // If the canvas is not in view, do nothing
        if (!isCanvasInView) {
          return;
        }

        // If the scroll direction is down, scroll to the bottom of the canvas
        if (window.scrollY > canvasTop) {
          //scroll to top
          window.scroll({
            top: canvasRef.current?.getBoundingClientRect().top,
            behavior: isIos ? "auto" : "smooth",
          });
        } else {
          // If the scroll direction is up, scroll to the bottom
          window.scroll({
            top: canvasRef.current?.getBoundingClientRect().bottom ?? 0,
            behavior: isIos ? "auto" : "smooth",
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
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeIn" }}
        animate={{ opacity: 1 }}
      >
        <Suspense fallback={<>lädt...</>}>
        <Canvas
          title={"dreh mich"}
          className="relative z-10 -translate-y-[7vh] -translate-x-[3vw] md:translate-x-0 md:translate-y-0 select-none"
          style={{
            pointerEvents: scrolling ? "none" : "auto",
            touchAction: scrolling ? "none" : "auto",
          }}
        >
          <Suspense fallback={<Html><div style={{color: "white", rotate: "67deg"}}>lädt...</div></Html>}>
          <PlaguePillar orbitalsEnabled={scrolling} />
          </Suspense>
        </Canvas>  
        </Suspense>
      </motion.div>
      
    </div>
  );
};

export default PlagueCanvas;
