import { Text } from "@nextui-org/react";
import MainLogo from "@/main-logo";
import { motion, useScroll, useSpring } from "framer-motion";



export default function Navigation() {

    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
      <div className="top-navigation-element sticky component-third">
        <nav>
            <div className="animate__animated animate__fadeInDown">
                <MainLogo/>
            </div>
            <div>
                <a href="" className="extended-router-element animate__animated animate__fadeInDown"><Text h3 className="animate__animated animate__fadeInDown">Resume</Text></a>
            </div>
        </nav>
        <motion.div className="progress-bar" style={{ scaleX }} />
      </div>
  )
}
