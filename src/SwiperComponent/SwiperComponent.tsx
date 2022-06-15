import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './swiperstyles.css';
import { Navigation, Pagination } from 'swiper';
import { initialDataReviews, DataReviewsType } from '../initialData';
import { ReviewComponent } from '../Main/Reviews/ReviewComponent/ReviewComponent';
import { Date } from '../Main/UserData/Date/Date';

interface ISwiperComponentProps {
  className: string,
}

export default function SwiperComponent ( { className } : ISwiperComponentProps) {

  const Data: DataReviewsType = initialDataReviews;

  return (
    <>
      <Swiper 
      cssMode={false}
      slidesPerView={2}
      spaceBetween={24}
      pagination={true}
      breakpoints={{
        100: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        425: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        616: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          spaceBetween: 24 ,
          cssMode: true,
        },
      }}
      navigation = {true} modules = {[Navigation, Pagination]} className = {className}>
          {
            Data.reviversArray.map(m => {
              const item = Data.reviewer[m];
              return(
                <SwiperSlide key={'reviewItem_' + Data.reviversArray.indexOf(m)} children = {
                  <ReviewComponent 
                    name={item.name} 
                    surname ={item.surname} 
                    date = {<Date date={item.date} size = {14}/>} 
                    text = {item.text}
                    avatarUrl = {undefined} // нужно будет поптом разобраться в этом...
                  />
                  }
                />
              );
            })
          }
      </Swiper>
    </>
  );
}
