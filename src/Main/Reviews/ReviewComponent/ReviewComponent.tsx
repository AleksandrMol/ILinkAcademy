import React from 'react';
import { AnonIcon } from '../../../svg';
import { HeaderStyle, HeaerBlockStyle, DateStyle, TextStyle, AvatarStyle } from './ReviewComponentStyle';
import { ReviewComponentStyle } from './ReviewComponentStyle';


interface IReviewComponentProps {
  name: string,
  surname: string,
  date: React.ReactNode,
  text: string,
  avatarUrl?: string,
}

export function ReviewComponent({name, surname, date, text, avatarUrl}: IReviewComponentProps) {
  
  return (
    <ReviewComponentStyle>
      <HeaerBlockStyle>
        <HeaderStyle>
          <AvatarStyle avatarUrl={avatarUrl}>
            {avatarUrl && (
              <img src={avatarUrl} alt="img" />
            )}

            {!avatarUrl && (
              <AnonIcon/>
            )}
          </AvatarStyle>

          {name + ' ' + surname}
        </HeaderStyle>

        <DateStyle>
          {date}
        </DateStyle>
          
      </HeaerBlockStyle>
      
      <TextStyle>
        {text}
      </TextStyle>
    </ReviewComponentStyle>
  );
}
