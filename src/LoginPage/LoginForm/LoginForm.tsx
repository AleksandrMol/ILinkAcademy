import React, { useState } from 'react';
import { Button } from '../../Header/Button';
import { InputComponent } from '../../Main/Reviews/ReviewAdd/InputComponent';
import { SectionHeader } from '../../Main/UserData/SectionHeader';
import { LoginFormStyle, LoginPageBackgroundStyle, InputBlock, EnterButtonStyle, ButtonsLinkStyle, ToChangeLinkStyle } from './LoginFormStyle';
import { Link } from 'react-router-dom';
import { initalDataUser, UserDataType } from '../../initialData';
import { LoginRaport } from './LoginRaport';

export function LoginForm() {
  const [invalidLog, setInvalidLog] = useState(false); // состояние Валидации для Логина
  const [invalidPas, setInvalidPas] = useState(false); // состояние Валидации для Пароля
  const [raportCall, setRaportCall] = useState(false)
  
  const data : UserDataType = initalDataUser;

  
  const clicker = () => {
    const enterLink = document.getElementById('toMain') as HTMLElement;
    enterLink.click();
  }
  
  const enterHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const logInput = document.getElementById('login') as HTMLInputElement;
    const passInput = document.getElementById('password') as HTMLInputElement;
    
    // Условия в переменных
    let logPatternNotFollowed = logInput.validity.patternMismatch || logInput.value == '';
    let userNotFound = (logInput.value != data.login) && (logInput.value != '');
    let passPatternNotFollowed = passInput.validity.patternMismatch || passInput.value == '';
    // Моя Валидация
    if(logPatternNotFollowed) {
      setInvalidLog(true);
      logInput.setCustomValidity(' '); //вызывает псевдокласс invalid
    }
    else{
      setInvalidLog(false);
      logInput.setCustomValidity('');
    }
    if(userNotFound) {
        let timeout = setTimeout(() => {
          clearTimeout(timeout);
          setRaportCall(false);
        }, 3000);
        setRaportCall(true);
        setInvalidLog(true);
        logInput.setCustomValidity(' '); 
    }

    if (passPatternNotFollowed) {
      setInvalidPas(true);
      passInput.setCustomValidity(' '); // позволяет присвоить псевдокласс invalid
    }
    else {
      setInvalidPas(false);
      passInput.setCustomValidity('');
    }
    
    if(!(logPatternNotFollowed) && !(userNotFound) && !(passPatternNotFollowed)) {
      clicker()
      // console.log('enterLink' + enterLink);

    }
  }

  return (
    <>
      <LoginFormStyle method='' action='' noValidate>
        <SectionHeader text='Войти'/>
        
        <InputBlock>
          <InputComponent 
            name='login' 
            type='text' 
            placeholder='Введите логин' 
            label='Логин' 
            pattern = "[A-Za-z0-9.,_@-]{1,}"
            invalidText='Проверьте логин на ошибки. Регистр букв важен!'
            invalid = {invalidLog}
          />
        </InputBlock>

        <InputBlock>
          <InputComponent
            name='password' 
            type='password' 
            placeholder='Введите пароль' 
            label='Пароль' 
            pattern = "[a-z]{5,}"
            invalidText='Пароль должен содержать латиницу и прописные буквы'
            invalid = {invalidPas}
            showPassword = {false} 
          />
        </InputBlock>

        <EnterButtonStyle>
          <Button text='Войти' onClick={enterHandle}/>
        </EnterButtonStyle>
        
        <ButtonsLinkStyle>
          <Link id='toMain' to="/mainPage">Войти</Link>
        </ButtonsLinkStyle>

        <ToChangeLinkStyle>
          <Link id='' to="/changeForm">Забыли пароль?</Link>
        </ToChangeLinkStyle>
      </LoginFormStyle>
      <LoginRaport text='Такого пользователя не существует' call = {raportCall}/>
    </>
  );
}
