import React from 'react';
import { ButtonStyle, IconStyle, TextStyle } from './ButtonStyle';

interface IButtonProps {
  text: string,
  disabled?: boolean;
  icon?: React.ReactNode,
  bgWhite?: boolean,
  id?: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export function Button({text, disabled, icon, bgWhite, id, onClick}:IButtonProps) {
  return (
    <ButtonStyle bgWhite={bgWhite} onClick={onClick} disabled = {disabled} id={id}>
      <IconStyle>{ icon }</IconStyle> 
      <TextStyle>{ text }</TextStyle>
    </ButtonStyle>
  );
}
