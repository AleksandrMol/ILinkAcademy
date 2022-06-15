import React from 'react';
import { LogoIcon } from '../svg/LogoIcon';
import { ProfileIcon } from '../svg/ProfileIcin';
import { Button } from './Button';
import { HeaderStyle, LogoStyle, ButtonWithTextStyle, ButtonWithIconStyle } from './HeaderStyle';
import { Userlink } from './Userlink';
import { initalDataUser, UserDataType } from '../initialData';

export function Header() {
  const Data : UserDataType = initalDataUser;

  return (
    <HeaderStyle> 
        <Userlink href='#' name ={Data.name + ' '} surname={Data.surname}/>

        <LogoStyle>
          <LogoIcon />
        </LogoStyle> 
        
        <ButtonWithTextStyle>
          <Button text={'Панель управления'}/>
        </ButtonWithTextStyle>
        <ButtonWithIconStyle>
          <Button text={''} icon = {<ProfileIcon/>}/>
        </ButtonWithIconStyle>
    </HeaderStyle>
  );
}
