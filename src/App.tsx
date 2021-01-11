import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

import { Physics } from '@react-three/cannon';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { DefaultCamera } from './common/components/camera/Camera';
import { Lights } from './common/components/lights/Lights';
import { LockButton } from './common/components/lock-button/LockButton';
import { Player } from './features/player/Player';
import { Floor } from './features/salon/Floor';
import { Model } from './features/salon/Model';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

export function App(): JSX.Element {
  return (
    <Main>
      <Reset />
      <LockButton />
      <Canvas concurrent shadowMap>
        <DefaultCamera />
        <Lights />
        <Physics gravity={[0, -1, 0]}>
          <Player />
          <Floor />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Physics>
      </Canvas>
    </Main>
  );
}
