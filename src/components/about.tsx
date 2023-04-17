import { Text } from "@nextui-org/react";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function About() {
    return(
        <div className="extended-about-element">
            <div className="first_mvJgtke">
            <ScrollAnimation animateIn="fadeIn" duration={10} initiallyVisible={true}>
              <Text h1 className="first-content">About</Text>
              </ScrollAnimation>
            </div>
            <div className="about-content MVbRt_8 FhG-6_5">
            <ScrollAnimation animateIn="fadeIn" duration={10} initiallyVisible={true}>
                <Text>I'am a passionate <span>Frontend Developer</span> in building visually appealing and user-friendly websites. I have a strong understanding of modern web development technologies and frameworks such as <span>HTML</span>, <span>SASS</span>, <span>TypeScript</span>, <span>React</span>, <span>NextJS</span> and etc. I have a keen eye for design and a solid understanding of user experience principles. I have worked on various projects, from small-scale websites to large-scale enterprise projects. I'am a skilled communicator who excels at collaborating with designers, developers, and project managers to ensure that projects are delivered on time and within budget. I'am always looking for new challenges and opportunities to improve My skills and knowledge in the field of web development.</Text>
              </ScrollAnimation>
            </div>
        </div>
    )
}