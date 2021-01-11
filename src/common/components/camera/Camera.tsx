import React, { useEffect, useRef } from 'react';
import { Camera, useThree } from 'react-three-fiber';

import { Vector3 } from 'three';

const initialPosition = new Vector3(0, 0, 0);

export function DefaultCamera(): JSX.Element {
  const ref = useRef<Camera>();
  const { setDefaultCamera } = useThree();

  useEffect(() => {
    if (ref.current) {
      setDefaultCamera(ref.current);
    }
  }, [setDefaultCamera]);

  return (
    <perspectiveCamera
      far={2000}
      fov={65}
      near={0.01}
      position={initialPosition}
      ref={ref}
    />
  );
}
