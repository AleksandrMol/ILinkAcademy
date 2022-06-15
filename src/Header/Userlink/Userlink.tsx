import React from 'react';
import { UserLinkStyle, ImageStyle, TextStyle } from './UserLinkStyle';

interface IUserLinkProps {
  href: string,
  name: string,
  surname: string,
}

export function Userlink({href, name, surname }: IUserLinkProps) {
  return (
    <UserLinkStyle href={href}>
      <ImageStyle>
      </ImageStyle>
      
      <TextStyle>
          {name}
        <span>
          {surname}
        </span>
      </TextStyle>
    </UserLinkStyle>
  );
}
