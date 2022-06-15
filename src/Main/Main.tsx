import React from 'react';
import { AboutUser, Background, HeaderText, MainStyle, ReviewsStyle } from './MainStyle';
import { MainBG } from '../svg/MainBG';
import { UserImage } from './UserImage';
import { UserData } from './UserData';
import { Reviews } from './Reviews';

export function Main() {
  return (
    <MainStyle>
      <Background>
        <MainBG />
      </Background>
      
      <HeaderText>
        Добро пожаловать в aкадемию!
      </HeaderText>

      <AboutUser>
        <UserImage />
        <UserData />
      </AboutUser>

      <ReviewsStyle>
        <Reviews />
      </ReviewsStyle>
    </MainStyle>
  );
}
