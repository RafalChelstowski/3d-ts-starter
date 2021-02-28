import { useRef } from 'react';
import { Object3DNode } from 'react-three-fiber';
import { ControlType, useControl } from 'react-three-gui';

import * as THREE from 'three';

import { useGuiPosition } from '../../common/hooks/gui/useGuiPosition';

type RefObject = Object3DNode<
  THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>,
  typeof THREE.Mesh
>;

interface CubeProps {
  position: number[];
  group: string;
}

export function Cube({ position, group }: CubeProps): JSX.Element {
  const meshRef = useRef<RefObject | null>(null);
  const arr = useGuiPosition({ position, group });

  const wireframe = useControl('Wireframe', {
    type: ControlType.BOOLEAN,
    value: false,
    group,
  });

  return (
    <mesh ref={meshRef} position={new THREE.Vector3(...arr)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" wireframe={wireframe} roughness={0.4} />
    </mesh>
  );
}
