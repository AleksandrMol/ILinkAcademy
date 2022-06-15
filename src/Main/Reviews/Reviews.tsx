import React, { useState } from 'react';
import { ContainerStyle, HeaderContainer, ButtonsStyle, ButtonWithTextStyle, ButtonWithIconStyle } from './ReviewsStyle';
import { SectionHeader } from '../UserData/SectionHeader/SectionHeader';
import { Button } from '../../Header/Button';
// import { SliderContainer } from './SliderContainer';
import { PlusIcon } from '../../svg';
import { ReviewAdd } from './ReviewAdd';
import { DirectionButton } from './DirectionButton/DirectionButton';
import SwiperComponent from '../../SwiperComponent/SwiperComponent';

export function Reviews() {
 // работа кнопок для слайдера
  const [backDisabled, setBackDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const backClick = () => {
    const backButton = document.querySelector('.swiper-button-prev') as HTMLElement;

    backButton.click();
    if (backButton.className.match(/swiper-button-disabled/)) {
      setBackDisabled(true)
    } 
    setNextDisabled(false);
  }

  const nextClick = () => {
    const nextButton = document.querySelector('.swiper-button-next') as HTMLElement;

    nextButton.click();
    if (nextButton.className.match(/swiper-button-disabled/)) {
      setNextDisabled(true)
    }
    setBackDisabled(false);
  }
 
  // работа кнопки для добавления отзыва
  const [call, setCall] = useState(false);

  const buttonHandler = () => {
    setCall(!call)
  }

  const handleCloser = () => {
    setCall(!call)
  }

  return (
    <>
      <ContainerStyle>
        <HeaderContainer>
          <SectionHeader text={'Отзывы'} color = {'var(--dark-grey)'} size = {64} weight = {500}/>

          <ButtonWithTextStyle>
          <Button icon = {<PlusIcon />} text={'Добавить отзыв'} onClick = {buttonHandler}/>
          </ButtonWithTextStyle>

          <ButtonWithIconStyle>
          <Button icon = {<PlusIcon />} text={''} onClick = {buttonHandler}/>
          </ButtonWithIconStyle>

          
        </HeaderContainer>
          
        <ReviewAdd closer = {handleCloser} call = {call} formId = 'reviewForm'/>
        
        {/* <SliderContainer /> */}
        <SwiperComponent className={'mySwiper'} />
      </ContainerStyle>

      <ButtonsStyle>
        <DirectionButton onClick={backClick} key={"back"} disabled = {backDisabled} rotate={180} />
        <DirectionButton onClick={nextClick} key={"next"} disabled = {nextDisabled} />
      </ButtonsStyle> 
    </>
  );
}