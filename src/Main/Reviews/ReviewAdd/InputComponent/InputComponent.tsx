import React, { useEffect, useState } from 'react';
import { InputComponentStyle, LabelStyle, InputStyle, TextareaStyle, CharacterCountStyle, IconContainer } from './InputComponentStyle';
import { ClosedEyeIcon, EyeIcon, InfoSquareIcon } from '../../../../svg';
import { Info } from '../Info';

interface IInputComponentProps {
  name: string,
  type?: 'text' | 'password' | 'tel' | 'number' | 'search' | 'date' | 'email' | 'url',
  tag?: 'input' | 'textarea',
  label?: string,
  placeholder?: string,
  pattern?: string, 
  invalidText?: string,
  maxlength?: number,
  disabled?: boolean, 
  required?: boolean, // указываем обязательность заполнения
  invalid?: boolean,
  showPassword?: boolean, // нужен для переключения видимости пароля
}

export function InputComponent({
  type, 
  name, 
  tag, 
  label, 
  placeholder, 
  pattern, 
  invalidText,
  maxlength, 
  disabled, 
  required, 
  invalid,
  showPassword}: IInputComponentProps) {

  const [characterCount, setCharacterCount] = useState(0);
  const [passwordIsShow, setPasswordIsShow] = useState(showPassword);
  const [inputType, setInputType] = useState(type);

  const PISFunc = () => {
    setPasswordIsShow(!passwordIsShow);
    inputType == 'password'? setInputType('text') : setInputType('password');
  };

  function characterCounter() {
    const textarea = document.querySelector('textarea');
    textarea != null ? setCharacterCount(textarea.value.length): console.log('null') ;
  };

  return (
    <InputComponentStyle>
      <LabelStyle htmlFor={name}>
        { label }
      </LabelStyle>

      { (tag == undefined || tag == 'input' ) && 
        (
          <>
            <InputStyle 
              required={required} 
              name = {name} 
              id = {name} 
              type = {inputType != undefined ? inputType : 'text'} 
              placeholder = {placeholder} 
              pattern = {pattern}
              disabled = {disabled}
            />

            <IconContainer>
              { (inputType == 'password' && passwordIsShow == false) &&
                (
                  <EyeIcon onClick={PISFunc} id = {name + '_EyeIcon'}/> 
                )
              }

              { (inputType == 'text' && passwordIsShow == true) &&
                (
                  <ClosedEyeIcon onClick={PISFunc} id = {name + '_ClosedEyeIcon'}/>
                )
              }

              { invalid == true && 
              (
                <Info text={invalidText} color='var(--red)' tooltip/>
              )
              }
            </IconContainer>
          </>
        )
      }
      { tag == 'textarea' &&
        (
          <>
            <TextareaStyle 
              name= {name} 
              id = {name} 
              placeholder = {placeholder} 
              disabled = {disabled} 
              maxLength = {maxlength} 
              onKeyUp = {characterCounter}
            ></TextareaStyle>
            { maxlength != undefined && 
              (
                <CharacterCountStyle>
                  {characterCount}/{maxlength}
                </CharacterCountStyle> 
              )
            }
          </>
        )
      }
      
    </InputComponentStyle>
  );
}
