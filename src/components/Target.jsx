import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Target = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/target.glb')

  // Animate the floating effect
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.position.y = Math.sin(t * 2) * 0.2 // up & down
    
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 15.81]} scale={0.491}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_0.geometry}
          material={materials['Material.001']}
          position={[-8, 8.72, -8.449]}
          rotation={[5, -6, 5]}
          scale={1.25}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/target.glb')
export default Target
