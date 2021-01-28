import { useRef } from 'react';
import { Canvas } from 'react-three-fiber';

import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { OrbitControls } from './common/components/controls/OrbitControls';
import { Lights } from './common/components/lights/Lights';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

export function App(): JSX.Element {
  const meshRef = useRef();
  return (
    <Main>
      <Reset />
      <Canvas camera={{ near: 0.02, far: 1000, fov: 80 }} concurrent shadowMap>
        <Lights />80
        <mesh ref={meshRef}>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </Main>
  );
}
