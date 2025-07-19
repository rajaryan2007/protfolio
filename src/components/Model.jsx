import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/just_a_girl.glb')
  const { mouse } = useThree()

  // Animate model with mouse movement
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = mouse.x * Math.PI * -0.05 // Left-Right
      group.current.rotation.x = mouse.y * Math.PI * -0.05 // Up-Down
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.lambert5SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.lambert5SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.lambert5SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.lambert6SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.lambert6SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.lambert6SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.lambert6SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.lambert6SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.lambert7SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/just_a_girl.glb')

export default Model
