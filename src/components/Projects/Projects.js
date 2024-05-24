import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Landing from "../../Assets/Projects/port.jpg";
import Drum_Kit from "../../Assets/Projects/Drum_Kit.png";
import Simon from "../../Assets/Projects/Simon.png";
import Youtube from "../../Assets/Projects/youtube_clone.png";
import Dukaan from "../../Assets/Projects/Dukaan.png";
import Dashboard from "../../Assets/Projects/Dashboard.png"
import Wordwall from "../../Assets/Projects/wordwall.png"
import transfer  from "../../Assets/Projects/transfer.png";

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
              imgPath={Landing}
              isBlog={false}
              title="E-commerce App(In progress)"
              description="In this project I have been
              Developing a responsive e-commerce frontend with React and Tailwind CSS. Features include product browsing, search,
               and cart management. Using modern UI/UX practices for engagement. Integrating with backend APIs for real-time data. 
               Styling with Tailwind CSS for a visually appealing interface. Prioritizing code quality and performance."
              ghLink="https://github.com/prynsh/E-commerce-"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transfer}
              isBlog={false}
              title="EasyPay (using Next.js)"
              description="This project is a Next.js application enabling user authentication using NextAuth, sign-in, and money transfers among users.
              It has a dynamic dashboard which displays account information about the user. It has a transactions page which displays all the transactions
              made by the user and giving the type of it along with the timestamp and amount
              It uses webhooks to add real-time money to user’s wallet and updates post-transaction, ensuring accurate and
              up-to-date account information for all users. It Has a CI/CD pipeline for constant updates and PR’s made on github. This has been dockerized such that
              whenever a PR is pushed to the github the dockerised file gets sent to the dockerhub and (AWS)EC2 instance pulls the image from dockerhub and updates it over there"
              ghLink="https://github.com/prynsh/Easy_Pay-Next.js-"
              // demoLink="https://easy-pay-psi.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wordwall}
              isBlog={false}
              title="WordWall"
              description="Developed a dynamic blogging website 'WordWall' which is a go to place for pinning down your thoughts.
               The website uses React.js and TypeScript  for the UI along with TailwindCSS for styling. Hono is used for backend 
               and Prisma along with PostgresSQL for the database. The backend is deployed on Cloudflare using workers while the
                frontend is deployed on Vercel. Leveraging JSON Web Tokens (JWT) for authentication, the platform ensures robust
                 security measures while offering seamless access to its features upon sign in. Users can explore an array of blogs
                  covering diverse topics, fostering a vibrant community of knowledge-sharing and discussion. They can effortlessly 
                  create, edit, and publish their own blogs, empowering them to share their ideas with a wide audience."
              ghLink="https://github.com/prynsh/WordWall"
              demoLink="https://word-wall-smoky.vercel.app/signup"              
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="EasyPay"
              description="EasyPay is a web application designed to simplify financial transactions among users. 
              With its user-friendly interface, EasyPay offers seamless registration and sign-in functionalities, 
              leading users to a dynamic dashboard where they can view other registered users and perform money transfers effortlessly.
               The platform ensures real-time balance updates, providing users with accurate and up-to-date account information after
                each transaction. EasyPay aims to streamline the process of peer-to-peer money transfers, making financial interactions 
                swift and convenient for all users."
              ghLink="https://github.com/prynsh/EasyPay"
              demoLink="https://easy-pay-psi.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Youtube-Clone"
              description="This project is a clone of YouTube built using React, Tailwind CSS, and TypeScript.
               It aims to replicate the core features and functionalities of YouTube, such as browsing videos, searching, 
               and playing videos.
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
              description="This project was based on assignment by Dukaan(startup).TypeScript has been used here to make sure 
              everything was in order and the code was solid. For making things look good, TailwindCSS was used, which made it 
              easy to style everything exactly how wanted. And with Next.js, a strong foundation for the website is built, 
              that makes it load fast and work smoothly,  The expectation of the project was to match Dukaan's style and design.
               It was important that everything looked just right on different screens and worked smoothly."
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

              Developed a Simon game using HTML, CSS, and jQuery. The game presents a sequence of signals (colors) that the
              player must repeat. As the game progresses, the sequences become longer and more challenging. If the player fails
               to repeat a sequence or takes more than 5 seconds, the game ends. Simon also speeds up after the 5th, 9th, 
               and 13th signals, adding skill levels. If the player successfully completes sequences for skill levels 1, 2, 3, or 4,
                Simon salutes the player with a special signal."
              ghLink="https://github.com/prynsh/Simon-game"
              demoLink="https://simon-game-gamma-indol.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drum_Kit}
              isBlog={false}
              title="Drum-Kit"
              description="Drum-Roll Website using only HTML,CSS and Javascript This is a website which has drum rolls 
              pictures in it with the alphabets and we can play the drums by pressing either buttons or clicking on the 
              pictures of the drum. It also has animations of shadow on the button pressed to undestand which button is pressed."
              ghLink="https://github.com/prynsh/Drum-Roll-Website"
              demoLink="https://prynsh.github.io/Drum-Roll-Website/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
