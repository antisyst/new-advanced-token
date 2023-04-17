import { Text } from "@nextui-org/react";
import { SiNextdotjs, SiReact, SiRedux } from 'react-icons/si';
import { DiSass } from 'react-icons/di'
 

export default function Skills() {
    return(
        <div className="extended-skills-element">
             <div className="first_mvJgtke">
              <Text h1 className="first-content">Top Skills</Text>
            </div>
            <div className="extended-skills-container GhJfr_6 BnAsK_8">
                <div className="skills-element_inline_element Hpjtg_3 Gkljh_5">
                    <DiSass/>
                    <Text h1>SASS</Text>
                </div>
                <div className="skills-element_inline_element Hpjtg_3 Gkljh_5">
                    <SiNextdotjs/>
                    <Text h1>NextJS</Text>
                </div>
                <div className="skills-element_inline_element Hpjtg_3 Gkljh_5">
                    <SiReact/>
                    <Text h1>ReactJS</Text>
                </div>
                <div className="skills-element_inline_element Hpjtg_3 Gkljh_5">
                    <SiRedux/>
                    <Text h1>Redux</Text>
                </div>
            </div>
        </div>
    )
}