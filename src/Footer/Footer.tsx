import React from 'react';
import { VKIcon, RedditIcon, TelegramIcon } from '../svg';
import { Copyright, FooterStyle, IconLink, Icons } from './FooterStyle';

export function Footer() {
  return (
    <FooterStyle>
      <Copyright>
        <span>©</span> iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
      </Copyright>

      <Icons>
        <IconLink href='#' width = {20} height = {20}>
          <VKIcon/>
        </IconLink>
        <IconLink href='#' width = {20} height = {20}>
          <RedditIcon/>
        </IconLink>
        <IconLink href='#' width = {20} height = {20}>
          <TelegramIcon/>
        </IconLink>
      </Icons>
    </FooterStyle>
  );
}
