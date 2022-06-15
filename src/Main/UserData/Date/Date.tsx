import React from 'react';
import { DateStyle } from './DateStyle';

interface IDateProps {
  date: string,
  size?: 18 | 14,
}

export function Date({date, size}: IDateProps) {
  return (
    <DateStyle size={size}>
      { date }
    </DateStyle>
  );
}
