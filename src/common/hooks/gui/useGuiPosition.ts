import { ControlType, useControl } from 'react-three-gui';

interface UseGuiPositionProps {
  position: number[];
  group: string;
  min?: number;
  max?: number;
}

export function useGuiPosition({
  position,
  group,
  min = -10,
  max = 10,
}: UseGuiPositionProps): number[] {
  const [x, y, z] = position;

  const px = useControl(`${group} position x`, {
    type: ControlType.NUMBER,
    value: x,
    min,
    max,
    group,
  });

  const py = useControl(`${group} position y`, {
    type: ControlType.NUMBER,
    value: y,
    min,
    max,
    group,
  });

  const pz = useControl(`${group} position z`, {
    type: ControlType.NUMBER,
    value: z,
    min,
    max,
    group,
  });

  return [px, py, pz];
}
