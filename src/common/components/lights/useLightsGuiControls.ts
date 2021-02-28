import { useState } from 'react';
import { ControlType, useControl } from 'react-three-gui';

import { GuiGroups } from '../../../types';

function rgba(c: any) {
  if (typeof c === 'object') {
    return `rgba(${c.r},${c.g},${c.b},${c.a || 1})`;
  }
  return c;
}

export interface UseLightsGuiControls {
  ambientLightIntensity: any;
  ambientLightColor: any;
  directionalLightIntensity: any;
  directionalLightColor: any;
}

export function useLightsGuiControls(): UseLightsGuiControls {
  const [clearColor, setClearColor] = useState('#fff');

  const ambientLightIntensity = useControl('ambient light intensity', {
    type: ControlType.NUMBER,
    value: 1,
    min: 0,
    max: 1,
    group: GuiGroups.AMBIENT_LIGHT,
  });

  const ambientLightColor = useControl('ambient light color', {
    type: 'color',
    state: [clearColor, (c) => setClearColor(rgba(c))],
    group: GuiGroups.AMBIENT_LIGHT,
    inline: true,
  });

  const directionalLightIntensity = useControl('directional light intensity', {
    type: ControlType.NUMBER,
    value: 1,
    min: 0,
    max: 1,
    group: GuiGroups.DIRECTIONAL_LIGHT,
  });

  const directionalLightColor = useControl('ambient light color', {
    type: 'color',
    state: [clearColor, (c) => setClearColor(rgba(c))],
    group: GuiGroups.DIRECTIONAL_LIGHT,
    inline: true,
  });

  return {
    ambientLightIntensity,
    ambientLightColor,
    directionalLightIntensity,
    directionalLightColor,
  };
}
