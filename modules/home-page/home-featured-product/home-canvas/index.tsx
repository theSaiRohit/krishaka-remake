import { canvasCss } from "@/modules/home-page/home-featured-product/home-canvas/styles";
import { DepodderHome } from "@/modules/models/depodder-home";
import { Environment, OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function HomeCanvas() {
  return (
    <Canvas css={canvasCss}>
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <TransformControls />
      <OrbitControls />
      <DepodderHome />
    </Canvas>
  );
}
