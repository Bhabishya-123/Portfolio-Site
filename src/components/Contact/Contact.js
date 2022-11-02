import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ContactWrapper, ContactCont } from "./Contact.Styled";
import { ButtonC } from "./Contact.Styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../Toast.css"

function Contact({ toggled }) {

   //function for popup react-toastify
   const notifySendPopup = () =>
   toast("Email Submitted", {
     autoClose: 3000,
     closeOnClick: true,
     pauseOnHover: false,
     type:"success",
     theme:toggled===true?'dark': ' '
   });

   //sending email via emailjs code
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); //it will prevent document from reloading

    emailjs.sendForm(
        /*sending form data to provided id of emailjs
         it consist service id , template id and user id along with form data sent by user */
        "service_1vldxak",
        "template_x6w73ar",
        form.current,
        "F4HUm3ynMMnc-46dc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent");
        }
      );
    e.target.reset(); //it will reset form field when it is sent
    notifySendPopup();
  };

  return (
    <>
     <ToastContainer bodyClassName="toastCont" />
      <ContactWrapper>
        <ContactCont toggled={toggled}>
          <div style={{ height: "60%" }}>
            <h1 style={{ fontSize: "30px", margin: "6% 0%" }}>
              Get in Touch <br />{" "}
              <span style={{ color: "orange" }}>Contact me</span>
            </h1>
          </div>
          <div style={{ color: "grey" }}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                style={{
                  marginBottom: "25px",
                  height: "40px",
                  width: "100%",
                  border: "2px solid orange",
                  borderRadius: "5px",
                }}
                type="text"
                name="user_name"
                placeholder="Name"
                required
              />
              <br />
              <input
                style={{
                  marginBottom: "25px",
                  height: "40px",
                  width: "100%",
                  border: "2px solid orange",
                  borderRadius: "5px",
                }}
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <br />
              <textarea
                style={{
                  marginBottom: "25px",
                  height: "60px",
                  width: "100%",
                  border: "2px solid orange",
                  borderRadius: "5px",
                }}
                name="message"
                defaultValue="message"
                required
              >
  
              </textarea>
              <br />
              <div style={{ textAlign: "center" }}>
                <ButtonC type="submit">
                  {" "}
                  send{" "}
                </ButtonC>
              </div>
            </form>
          </div>
        </ContactCont>
        <div
          style={{
            position: "absolute",
            bottom: "3%",
            display: "flex",
            justifyContent: "center",
            gap: "20%",
          }}
        >
         <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bhabishya-ghimire-655286221/"> <LinkedInIcon style={{ fontSize: "30px", cursor: "pointer" }} /> </a>
         <a target="_blank" rel="noreferrer" href="https://www.facebook.com/bhabishya.ghimireabd.7">   <FacebookIcon style={{ fontSize: "30px", cursor: "pointer" }} /> </a>
         <a target="_blank" rel="noreferrer" href="https://github.com/Bhabishya-123"><GitHubIcon style={{ fontSize: "30px", cursor: "pointer" }} /> </a>
        </div>
      </ContactWrapper>
    </>
  );
}

export default Contact;
