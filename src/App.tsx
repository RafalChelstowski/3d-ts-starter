import { Canvas } from '@react-three/fiber';

import { OrbitControls } from './common/components/controls/OrbitControls';
import { Lights } from './common/components/lights/Lights';
import { Cube } from './features/cube/Cube';
import { Floor } from './features/floor/Floor';

export function App(): JSX.Element {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Canvas>
        <Lights />
        <Cube position={[-2, 0, 0]} />
        <Cube position={[0, 0, 0]} />
        <Cube position={[2, 0, 0]} />
        <Floor />
        {/* <Camera /> */}
        <OrbitControls />
      </Canvas>
    </main>
  );
}
