import { useFrame, useThree } from 'react-three-fiber';

export function Camera(): JSX.Element | null {
  const { camera, clock } = useThree();

  useFrame(() => {
    camera.position.z = 10 + Math.sin(clock.getElapsedTime()) * 9;
    camera.updateProjectionMatrix();
  });
  return null;
}
