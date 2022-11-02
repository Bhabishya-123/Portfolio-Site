import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  TestomonialCard,
  TestomonialDualCardContainer,
  // TestomonialSingleCardContainer,
  TestomonialWrapper,
} from "./MyTesto.Styled";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
export default function MyTestomonial() {
  return (
    <>
      <TestomonialWrapper>
        <h1 style={{ textAlign: "center" }}>
          Clients always gets {" "}
          <span style={{ color: "orange" }}>Exceptional works</span> from me...
        </h1> 
        <Swiper     autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }} navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <TestomonialDualCardContainer >
       <div style={{width:'250px'}}>I found him well educated and honoured and much more efficient for web developing
            as well as good vibes.
       </div>
              <TestomonialCard data-aos="flip-down">
                <img src=" " alt="firstclient"></img>
              </TestomonialCard>
            </TestomonialDualCardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <TestomonialDualCardContainer>
       <div style={{width:'250px'}}>I found him well educated and honoured and much more efficient for web developing
            as well as good vibes.
       </div>
              <TestomonialCard data-aos="flip-down">
                <h3>Clients2</h3>
              </TestomonialCard>
            </TestomonialDualCardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <TestomonialDualCardContainer>
       <div style={{width:'250px'}}>I found him well educated and honoured and much more efficient for web developing
            as well as good vibes.
       </div>
              <TestomonialCard data-aos="flip-down">
                <h3>Clients3</h3>
              </TestomonialCard>
            </TestomonialDualCardContainer>
          </SwiperSlide>

        </Swiper>
      </TestomonialWrapper>
    </>
  );
}
