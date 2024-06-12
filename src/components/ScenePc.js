import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import HeroPage from "./HeroPage";

function Model(props) {
  const group = useRef();
  // Load model
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1
    );
  });

  //responsive camera angle
  useFrame((state) => {
    const divPippo        = document.querySelector(".pippo");
    divPippo.style.width  = window.innerWidth < 768 ? "100%" : "40vw";
    divPippo.style.height = window.innerWidth < 768 ? "35vh" : "70vh";
    state.camera.fov      = window.innerWidth < 768 ? 85 : 65;

    const canvas = document.querySelector("canvas");

    switch (true) {
      case window.innerWidth >= 3024:
        canvas.style.width = "38.6vw";
        canvas.style.height = "69.8vh";
        break;
      case window.innerWidth >= 2268:
        canvas.style.width = "40.9vw";
        canvas.style.height = "72.7vh";
        break;
      case window.innerWidth >= 2016:
        canvas.style.width = "40.6vw";
        canvas.style.height = "70.2vh";
        break;
      case window.innerWidth >= 1890:
        canvas.style.width = "40.44vw";
        canvas.style.height = "67.5vh";
        break;
      case window.innerWidth >= 1680:
        canvas.style.width = "40.1vw";
        canvas.style.height = "69.4vh";
        break;
      case window.innerWidth >= 1512:
        canvas.style.width = "39.6vw";
        canvas.style.height = "70vh";
        break;
      case window.innerWidth >= 1374:
        canvas.style.width = "39.6vw";
        canvas.style.height = "70.9vh";
        break;
      case window.innerWidth > 768:
        canvas.style.width = "39.6vw";
        canvas.style.height = "70vh";
        break;
      default:
        break;
    }

    //props.reference.current.style.width = window.innerWidth < 768 ? '100%': '70vw';
    //props.reference.current.style.height = window.innerWidth < 900 ? '100%': '40vh';
  });

  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null} className="filii">
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]} className="filii">
        <group
          position={[0, 2.96, -0.13]}
          rotation={[Math.PI / 2, 0, 0]}
          className="filii"
        >
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>
            {/* Drei's HTML component can "hide behind" canvas geometry */}
            <Html
              className="content"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <div
                className="wrapper"
                onPointerDown={(e) => e.stopPropagation()}
              >
                <HeroPage />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

export default function App() {
  const canv = useRef();

  return (
    <Canvas
      ref={canv}
      camera={{ position: [-5, 0, -15], fov: 65 }}
      className="pippo"
      style={{ width: "40vw", height: "70vh", cursor: "default" }}
    >
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null} className="fili">
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]} className="fili">
          <Model reference={canv} className="fili" />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}
