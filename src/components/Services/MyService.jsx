import React,{useEffect} from "react";
import { ServiceWrapper, ServiceText, ServiceCard,ButtonLink } from "./MyService.Styled";
import { ServiceButton, ServiceCardContainer, BtnP} from "./MyService.Styled";
import CV from "../../other/cv.pdf"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import serv3 from '../../image/1service.png';
import serv2 from '../../image/2service.png';
import serv1 from '../../image/3service.png';

function MyServices({toggled}) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <ServiceWrapper>
        <ServiceText>
          <h1 style={{ fontSize: "30px", margin: "6% 0%" }}>
            My Awesome <br /> <span style={{ color: "orange" }}>services</span>
          </h1>
          <p>
            Our primary service is frontend development and responsive design
            along with supported backend development using API's & firebase as
            well.
          </p>
          <ServiceButton style={{marginTop:'70px'}}><ButtonLink href={CV} style={{textDecoration:'none',background:"none"}} download="Bhabishya's CV">Download CV</ButtonLink></ServiceButton>
        </ServiceText>

        <ServiceCardContainer>
          <ServiceCard tv={toggled} data-aos-duration='5000' data-aos="fade-left"  style={{top:'25%',left:'4%'}}>
          <img src={serv1} alt="service pic" /> 
          <h4>Design</h4>
          <p style={{fontSize:'13px'}}>Figma, Sketch, Photoshop, Adobe illustrator, Adobe xd</p>
          <BtnP>Learn More</BtnP>
          </ServiceCard>
          <ServiceCard tv={toggled} data-aos-duration='5000' data-aos="fade-right" style={{top:'2%',left:'60%'}}>
          <img src={serv2} alt="service pic" />  
          <h4>Developer</h4>
          <p style={{fontSize:'13px'}}>Html, Css, Javascript, React, Nodejs, Express, Php, Java, Mysql, Mongodb</p>
          <BtnP>Learn More</BtnP>
          </ServiceCard>
          <ServiceCard tv={toggled} data-aos-duration='5000' data-aos="fade-left" style={{top:'55%',left:'54%'}}>
          <img src={serv3} alt="service pic" />  
          <h4>UI/UX</h4>
          <p style={{fontSize:'13px'}}>UI design is all about creating intuit, aesthetically-pleasing, interactive interfaces</p>
          <BtnP>Learn More</BtnP>
          </ServiceCard>
        </ServiceCardContainer>
      </ServiceWrapper>
    </>
  );
}

export default MyServices;
