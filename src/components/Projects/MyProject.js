import React from "react";
import { ProjectWrapper, ProjectCard } from "./MyProjects.Styled";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Keyboard,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import "swiper/css/pagination";
import pr2 from "../../image/proj2.png";
import pr3 from "../../image/proj3.png";
import pr5 from "../../image/proj5.png";
import pr6 from "../../image/proj6.png";
import pr7 from "../../image/proj7.png";
import pr8 from "../../image/proj8.png";
import pr9 from "../../image/proj9.png";
import pr10 from "../../image/proj10.png";
// import VisibilityIcon from '@mui/icons-material/Visibility';
SwiperCore.use([EffectCoverflow, Autoplay, Pagination, Keyboard]);

// if you want to use array
const slide_img = [
  [pr8, "https://azuronlineshopping.netlify.app/"],
  [pr2, "https://weather-u2qd.onrender.com/"],
  [pr3, "http://electronicstorenepal.42web.io"],
  [pr9, "http://bookrentalstore.42web.io"],
  [pr6, "https://fbchatmessenger.netlify.app/"],
  [pr5, "https://100infotech.netlify.app/"],
  [pr10, "https://todotypescriptredux.netlify.app/"],
  [pr7, "https://nitrotypinggame.netlify.app/"],
];

const MyProject = () => {
  return (
    <>
      <ProjectWrapper>
        <h4 style={{ fontSize: "30px", textAlign: "center" }}>
          Recent Projects
          <br /> <span style={{ color: "orange" }}>Portfolio</span>
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
          {slide_img.map((imgLink, i) => {
            return (
              <SwiperSlide
                key={i}
                style={{
                  position: "relative",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <ProjectCard>
                  <a href={imgLink[1]}>
                    <img
                      data-aos-duration="8000"
                      data-aos="fade-up"
                      src={imgLink[0]}
                      alt=""
                    />
                  </a>
                  {/* <Prev>
                      <div style={{display:'flex',alignItems:'center'}}> <VisibilityIcon/> LiveDemo</div>
              </Prev> */}
                </ProjectCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ProjectWrapper>
    </>
  );
};

export default MyProject;
