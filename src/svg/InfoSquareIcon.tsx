import React from 'react';

interface ISquareIcon {
  color?: string,
}

export function InfoSquareIcon({color}: ISquareIcon) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.612 1.29175H5.38783C2.87033 1.29175 1.29199 3.07425 1.29199 5.59675V12.4034C1.29199 14.9259 2.86283 16.7084 5.38783 16.7084H12.6112C15.137 16.7084 16.7087 14.9259 16.7087 12.4034V5.59675C16.7087 3.07425 15.137 1.29175 12.612 1.29175Z" stroke= {color != undefined? color : 'var(--purple)'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.99577 12.3334V9.00006" stroke = {color != undefined? color : 'var(--purple)'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.9916 5.83689H8.99993" stroke = {color != undefined? color : 'var(--purple)'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}