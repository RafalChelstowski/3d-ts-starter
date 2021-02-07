import { useFrame, useThree } from 'react-three-fiber';

import { useCameraGuiControls } from './useCameraGuiControls';

const cameraRange = 15;

export function Camera(): JSX.Element | null {
  const { camera, clock } = useThree();
  const [px, py, pz, rx, ry] = useCameraGuiControls({ range: cameraRange });

  useFrame(() => {
    camera.position.x = px;
    camera.position.y = py;
    camera.position.z = pz;

    camera.rotation.x = rx;
    camera.rotation.y = ry;

    camera.updateProjectionMatrix();
  });
  return null;
}
