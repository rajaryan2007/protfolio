import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Animate camera to move smoothly to position
    easing.damp3(state.camera.position, [0, 0, 10], 0.25, delta);

    if (!isMobile && groupRef.current) {
      // Smoothly rotate the group based on pointer position
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }

    // Make the camera look at the center
    state.camera.lookAt(0, 0, 0);
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
