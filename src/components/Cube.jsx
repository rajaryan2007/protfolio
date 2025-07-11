
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const Cube = (props)=>  {

  const { nodes, materials } = useGLTF('/models/cube.glb')
  return (
    <group{...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
       
      />
    </group>
  )
}

useGLTF.preload('/models/cube.glb')

export default Cube;
