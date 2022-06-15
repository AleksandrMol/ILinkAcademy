import React, { useEffect, useState } from 'react';
import { Arrow } from '../../../svg';
import { DirectionButtonStyle } from './DirectionButtonStile';

interface IDirectionButtonProps {
  disabled: boolean,
  rotate ?: 0 | 90 | 180 | 270 | 360,
  onClick?: () => void,

}

export function DirectionButton({disabled, rotate, onClick}: IDirectionButtonProps) {

  return (
    <DirectionButtonStyle onClick={onClick} disabled = {disabled} rotate = {rotate}>
      <Arrow />
    </DirectionButtonStyle>
  );
}
