import { useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { Controls as GuiControls, withControls } from 'react-three-gui';
import { useLocalStorage, useSearchParam } from 'react-use';

import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { Camera } from './common/components/camera/Camera';
import { OrbitControls } from './common/components/controls/OrbitControls';
import { Lights } from './common/components/lights/Lights';
import { Cube } from './features/cube/Cube';
import { Floor } from './features/floor/Floor';
import { GuiGroups, GuiLocalStorageKey } from './types';

const CanvasWithControls = withControls(Canvas);

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export function App(): JSX.Element {
  const [value, setValue] = useLocalStorage(GuiLocalStorageKey.GUI_KEY, 'off');
  const gui = useSearchParam(GuiLocalStorageKey.GUI_KEY);

  useEffect(() => {
    if (gui) {
      setValue(gui);
    }
  }, [gui, setValue]);

  return (
    <Main>
      <Reset />
      <GuiControls.Provider>
        <CanvasWithControls concurrent shadowMap>
          <Lights />
          <Cube position={[-2, 0, 0]} group={GuiGroups.CUBE_1} />
          <Cube position={[0, 0, 0]} group={GuiGroups.CUBE_2} />
          <Cube position={[2, 0, 0]} group={GuiGroups.CUBE_3} />
          <Floor />
          {/* <Camera /> */}
          <OrbitControls />
        </CanvasWithControls>
        {value === 'on' && (
          <GuiControls
            title="GUI"
            defaultClosedGroups={[...Object.values(GuiGroups)]}
          />
        )}
      </GuiControls.Provider>
    </Main>
  );
}
