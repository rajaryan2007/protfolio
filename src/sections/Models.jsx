import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Model from "../components/Model.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";

const Models = () => {
  return (
    <div className="w-full h-screen relative z-0">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 0], fov: 75 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
          <Model
            position={[0, -10, -20]} // Centered
            rotation={[0.3, 0, 0]}
            scale={ [0.16, 0.16, 0.16]} // fallback if undefined
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Models;
