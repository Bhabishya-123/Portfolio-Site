import React from "react";
import { ProjectWrapper,Prev} from "./MyProjects.Styled";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination,Keyboard} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import './Swiper.css'
import 'swiper/css/pagination'
import VisibilityIcon from '@mui/icons-material/Visibility';
SwiperCore.use([EffectCoverflow, Autoplay, Pagination,Keyboard]);

// if you want to use array
const slide_img = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg"
];



const MyProject = () => {
  return (
    <>
    <ProjectWrapper>
    <h4 style={{ fontSize: "30px",textAlign:'center' }}>
    Recent Projects<br /> <span style={{ color: "orange" }}>Portfolio</span>
  </h4>
  <Swiper
    
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        slidesPerView={"auto"}
        pagination={true}
        className="mySwiper"
        keyboard={true}
      >
        {/* using array */}
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide  key={i} style={{position:'relative',marginLeft:'10px',marginRight:'10px'}}>
              <img data-aos-duration='8000' data-aos="fade-up" src={img} alt="" />
              <Prev>
                      <div style={{display:'flex',alignItems:'center'}}> <VisibilityIcon/> preview</div>
              </Prev>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ProjectWrapper>
    </>
  );
};

export default MyProject;
