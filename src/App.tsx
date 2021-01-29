import { Canvas } from 'react-three-fiber';
import { Controls, withControls } from 'react-three-gui';

import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { Camera } from './common/components/camera/Camera';
// import { OrbitControls } from './common/components/controls/OrbitControls';
import { Lights } from './common/components/lights/Lights';
import { Cube } from './features/cube/Cube';

const CanvasWithControls = withControls(Canvas);

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

export function App(): JSX.Element {
  return (
    <Main>
      <Reset />
      <Controls.Provider>
        <CanvasWithControls
          camera={{ near: 0.02, far: 1000, fov: 80 }}
          concurrent
          shadowMap
        >
          <Lights />
          <mesh ref={meshRef}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <OrbitControls />
        </CanvasWithControls>
      </Controls.Provider>
      <Canvas camera={{ near: 0.02, far: 1000, fov: 80 }} concurrent shadowMap>
        <Lights />
        <Cube />
        {/* <OrbitControls /> */}
        <Camera />
      </Canvas>
    </Main>
  );
}
