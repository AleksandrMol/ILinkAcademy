import React, { useEffect } from 'react';
import { GlobalStyles } from "../GlobalStyles";
import { LogoIcon, MainBG } from '../svg';
import { LoginPageContainerStyle, LoginPageBackgroundStyle, LoginPageLogoStyle } from './LoginPageStyle';
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from '../Footer';
import { Info } from '../Main/Reviews/ReviewAdd/Info';

export function LoginPage() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/loginForm");
  },[]);
  
  return (
    <LoginPageContainerStyle>
      <GlobalStyles/>
      
      {/* <LoginPageBackgroundStyle>
        <MainBG />
      </LoginPageBackgroundStyle> */}

      <LoginPageLogoStyle>
        <LogoIcon />
      </LoginPageLogoStyle> 

      <Outlet />
    
      <Footer/>
    </LoginPageContainerStyle>
  );
}
