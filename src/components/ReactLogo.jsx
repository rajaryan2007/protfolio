import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const ReactLogo = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/react_logo.glb')

  // Animation: floating + slow Y-axis rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.position.y = Math.sin(t * 1) * 0.212 // smooth up-down
     
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[600, 100.935, 10.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[20.166, 20.166, 10.734]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/react_logo.glb')

export default ReactLogo
