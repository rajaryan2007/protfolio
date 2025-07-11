
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const ReactLogo = (props)=>  {
  const { nodes, materials } = useGLTF('/models/react_logo.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[600, 100.935, 10.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[20.166, 20.166, 20.734]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/react_logo.glb')

export default ReactLogo;