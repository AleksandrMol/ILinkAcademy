import React, { useState } from 'react';
import { Button } from '../../../Header/Button';
import { SectionHeader } from '../../UserData/SectionHeader';
import { InputComponent } from './InputComponent';
import  { FileLoader }  from './FileLoader';
import { Info } from './Info';
import { 
  Background, 
  CloseIcon, 
  HeaderContainer, 
  ReviewAddContainerStyle, 
  ReviewAddFormStyle, 
  NamePhotoStyle, 
  InputStyle, 
  TextareaStyle, 
  SendButtonStyle 
} from './ReviewAddStyle';
import { Message } from '../../../Message';

interface IReviewAddProps {
  call?: boolean,
  formId: string,
  closer: () => void,
}

export function ReviewAdd({ call, closer, formId }: IReviewAddProps) {
  const [isCall, setIsCall] = useState(call);

  
  const [failMessageState, setFailMessageState] = useState(false);
  const [luckMessageState, setLuckMessageState] = useState(false);

  if (call !== isCall) {
    setIsCall(call);
  }

  const sendHandle = () => {

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const texarea = document.getElementById('review') as HTMLTextAreaElement;

    let nameEmpty = nameInput.value == '';
    let texareaEmpty = texarea.value == '';

    if(nameEmpty) {
      nameInput.setCustomValidity(' ');
    }
    else {
      nameInput.setCustomValidity('');
    }

    if(texareaEmpty) {
      texarea.setCustomValidity(' ');
    }
    else {
      texarea.setCustomValidity('');
    }

    if(!(nameEmpty) && !(texareaEmpty)) {
      setLuckMessageState(true);
      closer();
    }
  }

  const closeMessageHandle = () => {
    setFailMessageState(false);
    setLuckMessageState(false);
  }

  return (
    <>
      { isCall && (
        <>
          <ReviewAddContainerStyle>  
            <Background onClick={closer} ></Background>

            <ReviewAddFormStyle id={formId} method='' action=''>
              <HeaderContainer>
                <SectionHeader text='Отзыв' size={24} weight={500}/>
                <CloseIcon onClick={closer}></CloseIcon>
              </HeaderContainer>

              <NamePhotoStyle>
                <InputStyle>
                  <InputComponent name='name' type='text' placeholder='Фамилия Имя' label='Как вас зовут?' />
                </InputStyle>

                <FileLoader inForm={formId} />
              </NamePhotoStyle>
              
              <TextareaStyle>
                <InputComponent tag='textarea' maxlength={200} name = 'review' label='Все ли вам понравилось?' placeholder='Напишите пару слов о вашем опыте...'/>
              </TextareaStyle>

              <SendButtonStyle>
                <Button text='Отправить отзыв' onClick={sendHandle}/>
                <Info text = 'Все отзывы проходят модерацию в течение 2 часов' id='sendId' />
              </SendButtonStyle>
            </ReviewAddFormStyle>
          </ReviewAddContainerStyle>
        </>
        )
      }

      <Message header='Что-то не так' message='Не получилось отправить отзыв. Попробуйте еще раз!' fail={true} call={failMessageState} closer={closeMessageHandle} />
      <Message header='Успешно!' message='Спасибо за отзыв о нашей компании :)' fail={false} call={luckMessageState} closer={closeMessageHandle}/>
    </>
  );
}
