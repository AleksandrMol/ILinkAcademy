import React, { useState } from 'react';
import { SectionHeader } from '../Main/UserData/SectionHeader';
import { RedBubbles } from '../svg/RedBubbles';
import { CloseIcon } from '../Main/Reviews/ReviewAdd/ReviewAddStyle';
import {FixedContainerStyle, MessageFailStyle, MessageLuckStyle, IconStyle, TextStyle, CloseIconFaleStyle, CloseIconLuckStyle, MessageTextStyle } from './MessageStyle';
import { GreenBubbles } from '../svg';

interface IMessageProps {
  header: string,
  message: string,
  fail: boolean,
  call: boolean,
  closer?: () => void,
}

export function Message({header, message, fail, call, closer}: IMessageProps) {
  
  return (
    <>
      {
        (fail && call) && 
        (
          <FixedContainerStyle onClick={closer}>
            <MessageFailStyle>
              <IconStyle>
                <RedBubbles/>
              </IconStyle>

              <TextStyle>
                <SectionHeader text={header} weight={500}/>

                <MessageTextStyle>
                  {message}
                </MessageTextStyle>
              </TextStyle>

              <CloseIconFaleStyle onClick={closer}>
                
              </CloseIconFaleStyle>
            </MessageFailStyle>
          </FixedContainerStyle>
        )
      }
      {
        (!fail && call) && 
        (
          <FixedContainerStyle onClick={closer}>
            <MessageLuckStyle>
              <IconStyle>
                <GreenBubbles/>
              </IconStyle>

              <TextStyle>
                <SectionHeader text={header} weight={500}/>

                <MessageTextStyle>
                  {message}
                </MessageTextStyle>
              </TextStyle>

              <CloseIconLuckStyle onClick={closer}>

              </CloseIconLuckStyle>
            </MessageLuckStyle>
          </FixedContainerStyle>
        )
      }
    </>
  );
}
