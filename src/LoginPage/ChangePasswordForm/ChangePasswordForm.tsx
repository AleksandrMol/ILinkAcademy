import React, { useState } from 'react';
import { ChangePasswordFormStyle, ButtonContainerStyle, ArrowStyle } from './ChangePasswordFormStyle';
import { Link } from 'react-router-dom';
import { EnterButtonStyle, ButtonsLinkStyle, InputBlock } from '../LoginForm/LoginFormStyle';
import { Button } from '../../Header/Button';
import { InputComponent } from '../../Main/Reviews/ReviewAdd/InputComponent';
import { SectionHeader } from '../../Main/UserData/SectionHeader';
import { Arrow } from '../../svg';
import { Message } from '../../Message';

export function ChangePasswordForm() {
  const [failMessageState, setFailMessageState] = useState(false);
  const [luckMessageState, setLuckMessageState] = useState(false);
  const [invalidMail, setInvalidMail] = useState(false); 

  
  const exitButtonHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const loginLink = document.getElementById('toLoginForm') as HTMLElement;
    event.preventDefault();
    
    loginLink.click();
  }
  
  const exitHandle = () => {
    const loginLink = document.getElementById('toLoginForm') as HTMLElement;
    
    loginLink.click();
  }
  
  const sendButtonHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const loginLink = document.getElementById('toLoginForm') as HTMLElement;

    const emailInput = document.getElementById('email') as HTMLInputElement;
    
    let emailPatternNotFollowed = emailInput.validity.patternMismatch || emailInput.value == '';

    event.preventDefault();

    if(emailPatternNotFollowed) {
      setInvalidMail(true);
      emailInput.setCustomValidity(' '); 

      setFailMessageState(true);
    }
    else{
      setInvalidMail(false);
      emailInput.setCustomValidity('');
      
      setLuckMessageState(true);

      setTimeout(() => {
        loginLink.click();
      }, 2500);
    }
  }

  const closeHandle = () => {
    setFailMessageState(false);
    setLuckMessageState(false);
  }

  return (
    <ChangePasswordFormStyle method='' action='' noValidate>
      <SectionHeader text='Сброс пароля'/>
      
      <InputBlock>
        <InputComponent 
          name='email' 
          type='email' 
          placeholder='Введите email' 
          label='Электронная почта' 
          pattern = "([A-Za-z0-9.,_-]{1,})@([A-Za-z]{1,}).([A-Za-z]{1,})" // попытался в валидацию почты
          invalid = {invalidMail}
        />
      </InputBlock>

      <ButtonContainerStyle>
        <EnterButtonStyle>
          <Button id='sendButton' text='Отправить код' onClick={sendButtonHandle}/>
        </EnterButtonStyle>

        <EnterButtonStyle>
          <Button id='exitButton' bgWhite = {true} text='Отмена' onClick={exitButtonHandle}/>
        </EnterButtonStyle>
      </ButtonContainerStyle>

      <ArrowStyle onClick={exitHandle}>
        <Arrow/>
      </ArrowStyle>

      <Message header='Что-то не так...' message='Не получилось отправить код. Попробуйте еще раз!' fail={true} call={failMessageState} closer = {closeHandle}/>
      <Message header='Код отправлен' message='Код успешно отправлен на вашу почту!' fail={false} call={luckMessageState} closer={closeHandle}/>

      <ButtonsLinkStyle>
        <Link id='toLoginForm' to="/loginForm">Отмена</Link>
      </ButtonsLinkStyle>
    </ChangePasswordFormStyle>
  );
}