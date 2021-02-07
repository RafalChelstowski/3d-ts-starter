import { useEffect, useRef, useState } from 'react';
import { Object3DNode, useThree } from 'react-three-fiber';
import { ControlType, useControl } from 'react-three-gui';

import * as THREE from 'three';

import { GuiGroups, MaterialControlParam, PositionControl } from '../../types';

type RefObject = Object3DNode<
  THREE.Mesh<
    THREE.BufferGeometry | THREE.Geometry,
    THREE.Material | THREE.Material[]
  >,
  typeof THREE.Mesh
>;

export function Cube(): JSX.Element {
  const meshRef = useRef<RefObject | null>(null);
  const { camera } = useThree();
  const [cameraLookAt, setCameraLookAt] = useState(new THREE.Vector3(0, 0, 0));

  const px = useControl(PositionControl.POS_X, {
    type: ControlType.NUMBER,
    value: 0,
    min: -1,
    max: 1,
    group: GuiGroups.TEST_CUBE,
  });

  const py = useControl(PositionControl.POS_Y, {
    type: ControlType.NUMBER,
    value: 0,
    min: -1,
    max: 1,
    group: GuiGroups.TEST_CUBE,
  });

  const pz = useControl(PositionControl.POS_Z, {
    type: ControlType.NUMBER,
    value: 0,
    min: -1,
    max: 1,
    group: GuiGroups.TEST_CUBE,
  });

  const wireframe = useControl(MaterialControlParam.WIREFRAME, {
    type: ControlType.BOOLEAN,
    value: false,
    group: GuiGroups.TEST_CUBE,
  });

  useEffect(() => {
    camera.lookAt(cameraLookAt);
    camera.updateProjectionMatrix();
  }, [camera, cameraLookAt]);

  const handleClick = () => setCameraLookAt(new THREE.Vector3(1, 1, 1));

  return (
    <mesh ref={meshRef} onClick={handleClick} position={[px, py, pz]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" wireframe={wireframe} />
    </mesh>
  );
}
