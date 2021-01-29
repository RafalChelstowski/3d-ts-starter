import { useEffect, useRef, useState } from 'react';
import { Object3DNode, useFrame, useThree } from 'react-three-fiber';

import * as THREE from 'three';

type RefObject = Object3DNode<
  THREE.Mesh<
    THREE.BufferGeometry | THREE.Geometry,
    THREE.Material | THREE.Material[]
  >,
  typeof THREE.Mesh
>;

export function Cube(): JSX.Element {
  const meshRef = useRef<RefObject | null>(null);
  const { camera, mouse, viewport } = useThree();
  const [cameraLookAt, setCameraLookAt] = useState(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    camera.lookAt(cameraLookAt);
    camera.updateProjectionMatrix();
  }, [camera, cameraLookAt]);

  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef?.current?.lookAt?.(
  //       ((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0)
  //     );
  //     console.log('meshref.current', meshRef.current);
  //   }
  // });

  const handleClick = () => setCameraLookAt(new THREE.Vector3(1, 1, 1));

  return (
    <mesh ref={meshRef} onClick={handleClick}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" wireframe />
    </mesh>
  );
}
