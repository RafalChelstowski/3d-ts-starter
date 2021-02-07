import { useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { Controls, withControls } from 'react-three-gui';
import { useLocalStorage, useSearchParam } from 'react-use';

import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { Camera } from './common/components/camera/Camera';
// import { OrbitControls } from './common/components/controls/OrbitControls';
import { Lights } from './common/components/lights/Lights';
import { Cube } from './features/cube/Cube';
import { GuiGroups, GuiLocalStorageKey } from './types';

const CanvasWithControls = withControls(Canvas);

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: white;
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
      <Controls.Provider>
        <CanvasWithControls concurrent shadowMap>
          <Lights />
          <Cube />
          <Camera />
        </CanvasWithControls>
        {value === 'on' && (
          <Controls title="GUI" defaultClosedGroups={[GuiGroups.TEST_CUBE]} />
        )}
      </Controls.Provider>
    </Main>
  );
}
