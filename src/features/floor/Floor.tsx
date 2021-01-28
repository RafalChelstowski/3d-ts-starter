import { usePlane } from '@react-three/cannon';

export function Floor(): JSX.Element {
  const [ref] = usePlane(() => ({
    position: [0, -1.5, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100]} attach="geometry" />
      <meshPhongMaterial attach="material" color="gray" />
    </mesh>
  );
}
