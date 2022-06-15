import React from 'react';
import { LogiRaportStyle}  from './LoginRaportStyle';

interface ILoginRaport {
  text: string,
  call: boolean,
}

export function LoginRaport({text, call}: ILoginRaport) {
  return (
    <>
      {
        call && (
          <LogiRaportStyle>
            {text}
          </LogiRaportStyle>
        )
      }
    </>
  );
}
