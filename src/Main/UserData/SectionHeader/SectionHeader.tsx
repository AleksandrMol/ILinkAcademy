import React from 'react';
import { SectionHeaderStyle } from './SectionHeaderStyle';

interface ISectionHeaderProps{
  text: string,
  color?: string,
  size?: number,
  weight?: number,
}

export function SectionHeader({ text, color, size, weight }:ISectionHeaderProps) {
  return (
    <SectionHeaderStyle color={color} size = {size} weight = {weight}>
      {text}
    </SectionHeaderStyle>
  );
}
