import { Canvas } from 'react-three-fiber';

import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { OrbitControls } from './common/components/controls/OrbitControls';
import { Lights } from './common/components/lights/Lights';
import { Box } from './features/box/Box';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

export function App(): JSX.Element {
  return (
    <Main>
      <Reset />
      <Canvas concurrent gl={{ alpha: false }} shadowMap>
        <OrbitControls />
        <Lights />
        <Box />
      </Canvas>
    </Main>
  );
}
