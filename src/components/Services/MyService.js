import React,{useEffect} from "react";
import { ServiceWrapper, ServiceText, ServiceCard,ButtonLink } from "./MyService.Styled";
import { ServiceButton, ServiceCardContainer } from "./MyService.Styled";
import CV from "../../other/cv.pdf"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyServices() {
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
          <ServiceCard data-aos-duration='5000' data-aos="fade-left"  style={{top:'25%',left:'4%'}}>coming soon</ServiceCard>
          <ServiceCard data-aos-duration='5000' data-aos="fade-right" style={{top:'2%',left:'60%'}}>coming soon</ServiceCard>
          <ServiceCard data-aos-duration='5000' data-aos="fade-left" style={{top:'55%',left:'54%'}}>coming soon</ServiceCard>
        </ServiceCardContainer>
      </ServiceWrapper>
    </>
  );
}

export default MyServices;
