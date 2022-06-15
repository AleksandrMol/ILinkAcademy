import React, { useState } from 'react';
import { DirectionButton } from '../DirectionButton/DirectionButton';
// import { ButtonsStyle, SliderContainerStyle } from './SliderContainerStyle';
import SwiperComponent from '../../../SwiperComponent/SwiperComponent';


export function SliderContainer() {

  // const [backDisabled, setBackDisabled] = useState(true);
  // const [nextDisabled, setNextDisabled] = useState(false);

  // const backClick = () => {
  //   const backButton = document.querySelector('.swiper-button-prev') as HTMLElement;
  //   const nextButton = document.querySelector('.swiper-button-next') as HTMLElement;

  //   backButton.click();
  //   if (backButton.className.match(/swiper-button-disabled/)) {
  //     setBackDisabled(true)
  //   } 
  //   setNextDisabled(false);
  // }

  // const nextClick = () => {
  //   const backButton = document.querySelector('.swiper-button-prev') as HTMLElement;
  //   const nextButton = document.querySelector('.swiper-button-next') as HTMLElement;

  //   nextButton.click();
  //   if (nextButton.className.match(/swiper-button-disabled/)) {
  //     setNextDisabled(true)
  //   }
  //   setBackDisabled(false);
  // }

  return (
    <>
      <SwiperComponent className={'mySwiper'} />
    </>
  );
}
