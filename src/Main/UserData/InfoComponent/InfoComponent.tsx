import React from 'react';
import { MaleIcon } from '../../../svg';
import { CategoryStyle, IconStyle, InfoComponentStyle, ValueStyle } from './InfoComponentStyle';

interface IInfoComponentProps {
  category: string,
  value: string,
  icon?: React.ReactNode, 
}

export function InfoComponent({category , value, icon} : IInfoComponentProps) {
  return (
    <InfoComponentStyle>
      <CategoryStyle>
        {category}:
      </CategoryStyle>
      
      <ValueStyle>
        {value}
      </ValueStyle>

      <IconStyle> 
        { value == 'мужчина' &&
        (
          <MaleIcon />
        )
          
        }
      </IconStyle>
    </InfoComponentStyle>
  );
}
