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
import cl1 from "../../image/client1.jpg";
import cl2 from "../../image/client2.jpg";
import cl3 from "../../image/client3.jpg";


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
       <div style={{width:'250px'}}>You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work
       </div>
              <TestomonialCard data-aos="flip-down">
                <img src={cl1} alt="firstclient"></img>
              </TestomonialCard>
            </TestomonialDualCardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <TestomonialDualCardContainer>
       <div style={{width:'250px'}}>You’re really good at following up with the client so as to ensure that they are never left in the dark. Keep it up!
       </div>
              <TestomonialCard data-aos="flip-down">
              <img src={cl2} alt="secondclient"></img>
              </TestomonialCard>
            </TestomonialDualCardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <TestomonialDualCardContainer>
       <div style={{width:'250px'}}>Clients constantly request you for advice to solve their problems. You’ve become quite the go-to person with our customers.
       </div>
              <TestomonialCard data-aos="flip-down">
              <img src={cl3} alt="thirdclient"></img>
              </TestomonialCard>
            </TestomonialDualCardContainer>
          </SwiperSlide>

        </Swiper>
      </TestomonialWrapper>
    </>
  );
}
