import { Text, Button, Link } from "@nextui-org/react";
import { FaGlobe } from 'react-icons/fa';

export default function SomeWorks() {
    return(
        <div className="extended-my-works-element Ghkrt_4 jgwJhf_t5">
             <div className="first_mvJgtke">
              <Text h1 className="first-content">Some Things I’ve Built</Text>
            </div>
            <div className="selected-works_container JG-rt_r7 fjgA_1b">
                <div className="some-works_item gkrO-4_g6 rPgh_2">
                    <Text h1><FaGlobe/>Awesome Portfolio Template</Text>
                    <Text h3>ReactJS, SASS, Motion, Reveal</Text>
                    <Button auto flat as={Link} href="https://jamesrobert.netlify.app/" target="_blank">
                View Project
            </Button>
                </div>
                <div className="some-works_item gkrO-4_g6 rPgh_2">
                    <Text h1><FaGlobe/>Frontend Portfolio Template</Text>
                    <Text h3>ReactJS, SASS, Motion, Router</Text>
                    <Button auto flat as={Link} href="https://richardandrei.netlify.app/" target="_blank">
                View Project
            </Button>
                </div>
                <div className="some-works_item gkrO-4_g6 rPgh_2">
                    <Text h1><FaGlobe/>Cars Marketplace</Text>
                    <Text h3>ReactJS, SASS, jQuery, Reveal</Text>
                    <Button auto flat as={Link} href="https://zastcars.netlify.app/" target="_blank">
                View Project
            </Button>
                </div>
                <div className="some-works_item gkrO-4_g6 rPgh_2">
                    <Text h1><FaGlobe/>Pricing Cards</Text>
                    <Text h3>ViteJS, SASS</Text>
                    <Button auto flat as={Link} href="https://plans-card.netlify.app" target="_blank">
                View Project
            </Button>
                </div>
                  <div className="some-works_item gkrO-4_g6 rPgh_2">
                    <Text h1><FaGlobe/>Calculator App</Text>
                    <Text h3>VanillaJS, SASS</Text>
                    <Button auto flat as={Link} href="https://rmzncalc.netlify.app" target="_blank">
                View Project
            </Button>
                </div>
            </div>
        </div>
    )
}
