import React from 'react';
import { InfoStyle, InfoStyleTolltip, Icon, TollIcon, Text, ToolText, ToolContainer } from './InfoStyle';
import { InfoSquareIcon } from '../../../../svg/InfoSquareIcon';

interface IInfoProps {
  text?: string,
  id?: string,
  color?: string,
  tooltip?: boolean, 
}

export function Info({text, id, color, tooltip}: IInfoProps) {
  return (
    <>
      {
        !tooltip && 
        (
          <InfoStyle id={id}>
            <Icon>
              <InfoSquareIcon color={color}/>
            </Icon>

            <Text>
              {text}
            </Text>
          </InfoStyle>
        )
      }
      {
        tooltip &&
        (
          <InfoStyleTolltip>
            {/* <TollIcon> */}
              <InfoSquareIcon color={color}/>
            {/* </TollIcon> */}
            {
              text && 
              (
                <ToolContainer>
                  <ToolText>
                    {text}
                  </ToolText>
                </ToolContainer>

              )
            }
          </InfoStyleTolltip>
        )
      }
    </>
  );
}
