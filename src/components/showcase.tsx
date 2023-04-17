import { Text, Container } from "@nextui-org/react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Showcase() {
    const squareVariants = {
        visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 }
      };
    return(
        
        <div className="extended-showcase-middle-element">
            <div className="extended-showcase-content">
            <ScrollAnimation animateIn='fadeIn'>
               <Text h1 className="m-5 josh-js animate__animated animate__fadeInUp" data-josh-anim-name="fadeInUp"><Text span>HI, I'M</Text><br />
               <b>R</b>amazan <b>A</b>zimli
              </Text>
              </ScrollAnimation>
              <Text h2 className="animate__animated animate__fadeInUp">I'M FRONTEND <span>UI</span> DEVELOPER<span>.</span></Text>
              <Text h3 className="animate__animated animate__fadeInUp">Crafting Engaging User Experiences with Creative Design & Advanced Technology.</Text>
              </div>
        </div>
    )
}