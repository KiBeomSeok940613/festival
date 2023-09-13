import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../index.css'


function Example4() {
const [isActive, setisActive] = useState("close");
  return (
    <>
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            // 배열을 50개 만드다는 뜻
            Array(50).fill().map((e,i)=>{
                return(
                    <SwiperSlide key={i}>기범석{i + 1}</SwiperSlide>
                  
                )

            })
        }
      
      
    </Swiper>
    <button onClick={()=>{setisActive(isActive === "open" ? "close" : "open")}}>클릭</button>
    <span>{isActive}</span>
    {/* <p className={isActive === "open" ? "active" : "on"} style={{display: isActive === "open" ? "block" : "block"}} */}
    
  
    {
        isActive === "open" &&
  <p className={`text-center font-bold border  ${isActive === "open" ? "active" : "on"}`} >Lorem ipsum dolor sit amet.</p>
    }
    {/* 실무에선 이 문법을 사용 */}
    
    {/* // 문자열이 포함 되어야 한다면 `` 아니라면 그냥 사용
    // 모든 변수에는 삼항 연산자 사용이 가능함 (open)과 같다면 "block"
    // 아니라면 "none" */}
    
        

    </>
  );
};

export default Example4