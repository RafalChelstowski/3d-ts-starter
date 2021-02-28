import { useLightsGuiControls } from './useLightsGuiControls';

export function Lights(): JSX.Element {
  const {
    ambientLightIntensity,
    ambientLightColor,
    directionalLightIntensity,
    directionalLightColor,
  } = useLightsGuiControls();

  return (
    <>
      <ambientLight
        intensity={ambientLightIntensity}
        color={ambientLightColor}
      />
      <directionalLight
        color={directionalLightColor}
        intensity={directionalLightIntensity}
        position={[0, 3, 0]}
      />
      {/* <pointLight intensity={5} position={[1, 1, 1]} /> */}
    </>
  );
}
