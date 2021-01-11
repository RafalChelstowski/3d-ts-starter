import { useCallback } from 'react';

import styled from 'styled-components';

import { useStore } from '../../../store/store';

const StyledLockButton = styled.button`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 50%;
  margin-left: -100px;
  width: 200px;
`;

export function LockButton(): JSX.Element {
  const toggleIsLocked = useStore(
    useCallback((state) => state.toggleIsLocked, [])
  );

  return (
    <StyledLockButton onClick={toggleIsLocked} type="button">
      Lock
    </StyledLockButton>
  );
}
