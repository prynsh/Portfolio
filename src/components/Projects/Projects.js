import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Landing from "../../Assets/Projects/Product_Details.jpg";
import Drum_Kit from "../../Assets/Projects/Drum_Kit.png";
import Simon from "../../Assets/Projects/Simon.png";
import Youtube from "../../Assets/Projects/youtube_clone.png";
import Dukaan from "../../Assets/Projects/Dukaan.png";
import Dashboard from "../../Assets/Projects/Dashboard.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="EasyPay"
              description="EasyPay is a web application designed to simplify financial transactions among users. With its user-friendly interface, EasyPay offers seamless registration and sign-in functionalities, leading users to a dynamic dashboard where they can view other registered users and perform money transfers effortlessly. The platform ensures real-time balance updates, providing users with accurate and up-to-date account information after each transaction. EasyPay aims to streamline the process of peer-to-peer money transfers, making financial interactions swift and convenient for all users."
              ghLink="https://github.com/prynsh/EasyPay"
              demoLink="https://easy-pay-psi.vercel.app/"              
            />
          </Col>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Landing}
              isBlog={false}
              title="E-commerce App(In progress)"
              description="In this project I have been
              Developing a responsive e-commerce frontend with React and Tailwind CSS. Features include product browsing, search, and cart management. Using modern UI/UX practices for engagement. Integrating with backend APIs for real-time data. Styling with Tailwind CSS for a visually appealing interface. Prioritizing code quality and performance."
              ghLink="https://github.com/prynsh/E-commerce-"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Youtube-Clone"
              description="This project is a clone of YouTube built using React, Tailwind CSS, and TypeScript. It aims to replicate the core features and functionalities of YouTube, such as browsing videos, searching, and playing videos.
              React: Used for building the user interface components and managing the application state.
              Tailwind CSS: Utilized for styling the components and creating a modern UI.
              TypeScript: Enhances code quality and provides better developer experience with static typing."

              ghLink="https://github.com/prynsh/React-YouTube-Front-Page-Clone"
              demoLink="https://react-tailwind-youtube-front-page-clone.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dukaan}
              isBlog={false}
              title="Dukaan Assignment"
              description="This project was based on assignment by Dukaan(startup).TypeScript has been  used here to make sure everything was in order and the code was solid. For making things look good, TailwindCSS was used, which made it easy to style everything exactly how wanted. And with Next.js, a strong foundation for the website is built, that makes it load fast and work smoothly,  The expectation of the project was to match Dukaan's style and design. It was important that everything looked just right on different screens and worked smoothly."
              ghLink="https://github.com/prynsh/Dukaan-Assignment"
              demoLink="https://dukaan-assignment-ecru-tau.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card d-flex justify-content-center align-items-center">
            <ProjectCard
              imgPath={Simon}
              isBlog={false}
              title="Simon Game"
              description="*Simon Game*

              Developed a Simon game using HTML, CSS, and jQuery. The game presents a sequence of signals (colors) that the player must repeat. As the game progresses, the sequences become longer and more challenging. If the player fails to repeat a sequence or takes more than 5 seconds, the game ends. Simon also speeds up after the 5th, 9th, and 13th signals, adding skill levels. If the player successfully completes sequences for skill levels 1, 2, 3, or 4, Simon salutes the player with a special signal."
              ghLink="https://github.com/prynsh/Simon-game"
              demoLink="https://simon-game-gamma-indol.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drum_Kit}
              isBlog={false}
              title="Drum-Kit"
              description="Drum-Roll Website using only HTML,CSS and Javascript This is a website which has drum rolls pictures in it with the alphabets and we can play the drums by pressing either buttons or clicking on the pictures of the drum. It also has animations of shadow on the button pressed to undestand which button is pressed."
              ghLink="https://github.com/prynsh/Drum-Roll-Website"
              demoLink="https://prynsh.github.io/Drum-Roll-Website/"
            />
          </Col>
         

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
