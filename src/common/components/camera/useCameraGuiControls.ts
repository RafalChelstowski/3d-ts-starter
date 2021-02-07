import { ControlType, useControl } from 'react-three-gui';

import { GuiGroups, PositionControl } from '../../../types';

interface UseCameraGuiControlsProps {
  range: number;
}

export function useCameraGuiControls({
  range,
}: UseCameraGuiControlsProps): number[] {
  const camPosX = useControl(PositionControl.POS_X, {
    type: ControlType.NUMBER,
    value: 0,
    min: -range,
    max: range,
    group: GuiGroups.CAMERA,
  });

  const camPosY = useControl(PositionControl.POS_Y, {
    type: ControlType.NUMBER,
    value: 0,
    min: -range,
    max: range,
    group: GuiGroups.CAMERA,
  });

  const camPosZ = useControl(PositionControl.POS_Z, {
    type: ControlType.NUMBER,
    value: 10,
    min: -range,
    max: range,
    group: GuiGroups.CAMERA,
  });

  const rotateXY = useControl('Rotation', {
    type: ControlType.XYPAD,
    distance: Math.PI * 2,
    group: GuiGroups.CAMERA,
    scrub: false,
  });

  return [camPosX, camPosY, camPosZ, rotateXY.x, rotateXY.y];
}
