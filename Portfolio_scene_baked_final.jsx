/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/portfolio_scene_baked_final.gltf -K -k 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/portfolio_scene_baked_final.gltf"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Empty"
          position={[0.129, 0.226, -0.721]}
          rotation={[-Math.PI, 0.507, -Math.PI]}
        >
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              name="Wolf3D_Hair"
              geometry={nodes.Wolf3D_Hair.geometry}
              material={materials["Wolf3D_Hair.001"]}
              skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
              name="EyeLeft"
              geometry={nodes.EyeLeft.geometry}
              material={materials["Wolf3D_Eye.001"]}
              skeleton={nodes.EyeLeft.skeleton}
            />
            <skinnedMesh
              name="EyeRight"
              geometry={nodes.EyeRight.geometry}
              material={materials["Wolf3D_Eye.001"]}
              skeleton={nodes.EyeRight.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Body"
              geometry={nodes.Wolf3D_Body.geometry}
              material={materials["Wolf3D_Body.001"]}
              skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Head"
              geometry={nodes.Wolf3D_Head.geometry}
              material={materials["Wolf3D_Skin.001"]}
              skeleton={nodes.Wolf3D_Head.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Bottom"
              geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
              material={materials["Wolf3D_Outfit_Bottom.001"]}
              skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Footwear"
              geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
              material={materials["Wolf3D_Outfit_Footwear.001"]}
              skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Top"
              geometry={nodes.Wolf3D_Outfit_Top.geometry}
              material={materials["Wolf3D_Outfit_Top.001"]}
              skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Teeth"
              geometry={nodes.Wolf3D_Teeth.geometry}
              material={materials["Wolf3D_Teeth.001"]}
              skeleton={nodes.Wolf3D_Teeth.skeleton}
            />
          </group>
        </group>
        <group
          name="CharacterSpot"
          position={[0.066, 0.243, -0.568]}
          rotation={[-Math.PI, 0.419, -Math.PI]}
        />
        <group
          name="Desk"
          position={[-0.074, 0, -1.521]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            name="Plane001_Plane002_BlackWood001"
            geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
            material={materials["BlackWood.001"]}
          />
          <mesh
            name="Plane001_Plane002_BlackWood001_1"
            geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
            material={materials["BlackCoatSteel.001"]}
          />
          <mesh
            name="Plane001_Plane002_BlackWood001_2"
            geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
            material={materials["GrayPlastic.001"]}
          />
          <mesh
            name="Plane001_Plane002_BlackWood001_3"
            geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
            material={materials["WhiteSteelScrew.001"]}
          />
          <mesh
            name="Plane001_Plane002_BlackWood001_4"
            geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
            material={materials["BlackPlastic.001"]}
          />
        </group>
        <group name="SM_ShelfSM_Shelf1" position={[-0.868, 1.694, -2.038]}>
          <mesh
            name="SM_ShelfSM_Shelf1_1"
            geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
            material={materials.lambert2SG}
          />
          <mesh
            name="SM_ShelfSM_Shelf1_1_1"
            geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
            material={materials["795548.001"]}
          />
        </group>
        <group name="LavaLamp" position={[-1.302, 2.071, -1.986]}>
          <mesh
            name="Node-Mesh001"
            geometry={nodes["Node-Mesh001"].geometry}
            material={materials.lambert4SG}
          />
          <mesh
            name="Node-Mesh001_1"
            geometry={nodes["Node-Mesh001_1"].geometry}
            material={materials["lambert2SG.001"]}
          />
          <mesh
            name="Node-Mesh001_2"
            geometry={nodes["Node-Mesh001_2"].geometry}
            material={materials["lambert3SG.002"]}
          />
        </group>
        <mesh
          name="WawaRug"
          geometry={nodes.WawaRug.geometry}
          material={materials.Rug}
          position={[-0.281, 0.009, 0.765]}
        />
        <group
          name="salameche"
          position={[-0.61, 2.044, -1.958]}
          rotation={[-Math.PI, 0.728, -Math.PI]}
        >
          <mesh
            name="mesh434900071"
            geometry={nodes.mesh434900071.geometry}
            material={materials.mat14}
          />
          <mesh
            name="mesh434900071_1"
            geometry={nodes.mesh434900071_1.geometry}
            material={materials.mat13}
          />
          <mesh
            name="mesh434900071_2"
            geometry={nodes.mesh434900071_2.geometry}
            material={materials["mat12.001"]}
          />
          <mesh
            name="mesh434900071_3"
            geometry={nodes.mesh434900071_3.geometry}
            material={materials["mat21.003"]}
          />
          <mesh
            name="mesh434900071_4"
            geometry={nodes.mesh434900071_4.geometry}
            material={materials["mat23.001"]}
          />
          <mesh
            name="mesh434900071_5"
            geometry={nodes.mesh434900071_5.geometry}
            material={materials.mat11}
          />
        </group>
        <group
          name="keyboard"
          position={[0.215, 0.981, -1.215]}
          rotation={[0, -0.224, 0]}
          scale={0.63}
        >
          <mesh
            name="mesh425587018"
            geometry={nodes.mesh425587018.geometry}
            material={materials["mat21.004"]}
          />
          <mesh
            name="mesh425587018_1"
            geometry={nodes.mesh425587018_1.geometry}
            material={materials["mat22.001"]}
          />
          <mesh
            name="mesh425587018_2"
            geometry={nodes.mesh425587018_2.geometry}
            material={materials["mat9.002"]}
          />
          <mesh
            name="mesh425587018_3"
            geometry={nodes.mesh425587018_3.geometry}
            material={materials["mat16.001"]}
          />
        </group>
        <group
          name="iMac"
          position={[0.454, 0.939, -1.723]}
          rotation={[Math.PI, -1.099, Math.PI]}
        >
          <mesh
            name="iMac_1"
            geometry={nodes.iMac_1.geometry}
            material={materials.Screen}
          />
          <mesh
            name="iMac_1_1"
            geometry={nodes.iMac_1_1.geometry}
            material={materials.ScreenBlack}
          />
          <mesh
            name="iMac_1_2"
            geometry={nodes.iMac_1_2.geometry}
            material={materials.iMacBody}
          />
        </group>
        <mesh
          name="Comp_Mouse"
          geometry={nodes.Comp_Mouse.geometry}
          material={materials["lambert3SG.003"]}
          position={[-0.008, 0, 0.076]}
        />
        <group name="plant" position={[-0.78, 1.071, -1.61]}>
          <mesh
            name="mesh24448074"
            geometry={nodes.mesh24448074.geometry}
            material={materials["mat9.003"]}
          />
          <mesh
            name="mesh24448074_1"
            geometry={nodes.mesh24448074_1.geometry}
            material={materials["mat20.001"]}
          />
          <mesh
            name="mesh24448074_2"
            geometry={nodes.mesh24448074_2.geometry}
            material={materials["mat21.005"]}
          />
        </group>
        <group
          name="Houseplant_7"
          position={[-2.019, -0.042, -1.526]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            name="Houseplant_7_1"
            geometry={nodes.Houseplant_7_1.geometry}
            material={materials["Black.001"]}
          />
          <mesh
            name="Houseplant_7_2"
            geometry={nodes.Houseplant_7_2.geometry}
            material={materials["Brown.001"]}
          />
          <mesh
            name="Houseplant_7_3"
            geometry={nodes.Houseplant_7_3.geometry}
            material={materials["Plant_Green.001"]}
          />
        </group>
        <group
          name="palm_tree_01"
          position={[2.13, -0.081, -1.055]}
          rotation={[-Math.PI, 0.672, -Math.PI]}
        >
          <mesh
            name="palm_tree_01-Mesh"
            geometry={nodes["palm_tree_01-Mesh"].geometry}
            material={materials["795548.001"]}
          />
          <mesh
            name="palm_tree_01-Mesh_1"
            geometry={nodes["palm_tree_01-Mesh_1"].geometry}
            material={materials["8BC34A.001"]}
          />
          <mesh
            name="palm_tree_01-Mesh_2"
            geometry={nodes["palm_tree_01-Mesh_2"].geometry}
            material={materials["DD9944.001"]}
          />
        </group>
        <group
          name="Chair"
          position={[0.089, 0, -0.664]}
          rotation={[0, -0.35, 0]}
        >
          <mesh
            name="Node-Mesh"
            geometry={nodes["Node-Mesh"].geometry}
            material={materials.Office_Cha}
          />
          <mesh
            name="Node-Mesh_1"
            geometry={nodes["Node-Mesh_1"].geometry}
            material={materials.Office_Cha_1}
          />
        </group>
        <mesh
          name="Screen"
          geometry={nodes.Screen.geometry}
          material={materials.Screen}
          position={[0.454, 0.939, -1.723]}
          rotation={[Math.PI, -1.099, Math.PI]}
        />
        <group name="Plane">
          <mesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={materials.Floor}
          />
          <mesh
            name="Plane001_1"
            geometry={nodes.Plane001_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Plane001_2"
            geometry={nodes.Plane001_2.geometry}
            material={materials.Wall}
          />
          <mesh
            name="Plane001_3"
            geometry={nodes.Plane001_3.geometry}
            material={materials.Glass}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/portfolio_scene_baked_final.gltf");
