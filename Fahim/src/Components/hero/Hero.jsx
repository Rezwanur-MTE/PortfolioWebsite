import { useState } from "react";
import heroImg from "../../assets/Rezwanur Rahman.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Hero.css";

const Hero = () => {
  const [modal, setModal] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9hsaak5", "template_x9fc8xo", form.current, {
        publicKey: "ItVQwX2ytDeRky2FZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully....");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <p>
              <span>
                <b>Md Rezwanur Rahman</b>
              </span>
              <br />
              B.Sc. in Mechatronics Engineering.
            </p>
            <h1>A full-stack Blockchain developer and Robotics enthusiast.</h1>
            <h3 className="justify">
              Welcome to my portfolio! I am Rezwanur, I've done my graduation
              from Rajshahi University of Engineering & Technology (RUET). I am
              passionate about Web3 development and Robotics, and relatable
              tecnologies like Iot, software development, edge computing, deep
              learning. I have done several projects in University and
              participated in many extracurricular activities, for example
              worked as technical secratary of University Robotics Club (RSR). I
              have a little interest and experience in business. Explore my
              works to see how I can contribute to your company.
            </h3>

            <Modal show={modal} onHide={() => setModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Contact me in "rezwanurrahman27@gmail.com" or +8801875857959
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form ref={form} onSubmit={sendEmail} className="email">
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <br />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <br />
                  <label>Message</label>
                  <textarea name="message" />
                  <br />
                  <input type="submit" value="Send" />
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setModal(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => alert("01521521324")}>
                  Whatsapp
                </Button>
              </Modal.Footer>
            </Modal>
            <button className="msg-btn" onClick={() => setModal(true)}>
              Email / Phone{" "}
            </button>
            <p>
              if you don't have metamask, then click "No Metamask" button above.
            </p>
          </div>

          <div className="hero-img">
            <div className="img-container">
              <img src={heroImg} alt="profile Photo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
