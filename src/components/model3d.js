import styles from "@/styles/model.module.css";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model3d = () => {
  return (
    <div className={styles.model}>
      <Canvas
        style={{ background: "transparent", height: "50vh", width: "70vh" }}
        shadows
        camera={{ position: [-1, 1, 0], fov: 15 }}
      >
        <Suspense fallback={null}>
          <Model />
          {/* To add environment effect to the model */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};
const Model = () => {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/portfolioDesk.gltf");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={0.01} />
    </>
  );
};

export default Model3d;
