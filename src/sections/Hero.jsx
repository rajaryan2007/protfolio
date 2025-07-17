import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { Leva, useControls } from "leva";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";

import ReactLogo from "../components/ReactLogo.jsx"
import Target from "../components/Target.jsx";




const Hero = () => {
  //   const {
  //     rotationX,
  //     rotationY,
  //     rotationZ,
  //     positionX,
  //     positionY,
  //     positionZ,
  //     scale,
  //   } = useControls("HackerRoom", {
  //     rotationX: { value: 0, min: -10, max: 10 },
  //     rotationY: { value: 0, min: -10, max: 10 },
  //     rotationZ: { value: 0, min: -10, max: 10 },
  //     positionX: { value: 2.5, min: -10, max: 10 },
  //     positionY: { value: 2.5, min: -10, max: 10 },
  //     positionZ: { value: 2.5, min: -10, max: 10 },
  //     scale: { value: 1, min: 0.1, max: 10 },
  //   });
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({
    maxWidth: 768
  });
  const isTablet = useMediaQuery({
    minWidth: 768, maxWidth: 1024
  });
//min-h-screen
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="h-200 w-full  flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Raj Aryan <span className="waving-hand">👋</span>
        </p>
        <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
          building product & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva collapsed={false} /> */}
        <Canvas className="w-full h-120" camera={{ position: [0, 0, 10], fov: 75 }}>
          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={calculateSizes.deskScale}
              /></HeroCamera>
            <group >
              <ReactLogo position={sizes.ReactLogoPosition} />

              <Target position={[-8, -4, 0]} />
            </group>
           
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
