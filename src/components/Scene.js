import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

export default function Scene() {

  const Cube = ({ position, size, color }) => {
    const ref = useRef();
    useFrame((state, delta) => {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta * 2.0;
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    });

    return (
      <mesh position={position} ref={ref}>
        <boxGeometry args={size} />
        <meshNormalMaterial color={color} />
      </mesh>
    );
  };

  const Sphere = ({ position, size }) => {
    const ref = useRef();

    const [isHovered, setIsHovered] = useState();
    const [isClicked, setIsCicked] = useState();
    useFrame((state, delta) => {
      //ref.current.rotation.x += delta;
      //ref.current.rotation.y += delta * 0.4;

      let speed = isHovered ? 2 : 0.2;
      ref.current.rotation.y += delta * speed;
      // ref.current.position.z = Math.sin(state.clock.elapsedTime) * -2;
    });
    return (
      <mesh
        position={position}
        ref={ref}
        onPointerEnter={(event) => (
          event.stopPropagation(), setIsHovered(true)
        )}
        onPointerLeave={() => setIsHovered(false)}
        onClick={() => setIsCicked(!isClicked)}
        scale={isClicked ? 1.5 : 1}
      >
        <sphereGeometry args={size} />
        <meshStandardMaterial color={isHovered ? "orange" : "blue"} wireframe />
      </mesh>
    );
  };

  const Torus = ({ position, size, color }) => {
    const ref = useRef();
    // useFrame((state, delta) => {
    //   ref.current.rotation.x += delta * 2.0;
    //   ref.current.rotation.y += delta * 2.0;
    //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // });
    return (
      <mesh position={position} ref={ref}>
        <torusKnotGeometry args={size} />
        {/* <meshStandardMaterial color={color} /> */}
        <MeshWobbleMaterial color={color} />
      </mesh>
    );
  };

  const directionalLightRef = useRef
  return (
    <>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.7} />
      <OrbitControls />
      {/* <Sphere position={[1, 0, 0]} size={[2, 30, 20]}  /> */}
      <Torus position={[0, 0, 0]} size={[2, 0.2, 1000, 40]} color={"red"} />

      {/* <group position={[0,-2,0]}>
      <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]}></Cube>
      <Cube
        position={[-1, -2, 0]}
        color={"hotpink"}
        size={[1, 1, 1]}
      ></Cube>
    </group> */}
    </>
  );
}
