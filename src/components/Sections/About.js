import React, { useEffect, useRef } from 'react';
import { MainHeader } from './Styling';
import {
    AboutSection,
    PaneContainer,
    LeftPane,
    RightPane,
    SectionOne,
    SectionTwo,
    SectionThree
} from './Styling';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const leftRef = useRef(null);

    useEffect(() => {
        gsap.to(leftRef.current, {
            scrollTrigger: {
                trigger: leftRef.current,
                start: "top -1rem",
                pin: true,
                markers: true
            }
        })
    }, [])

    return (
        <AboutSection>
            <PaneContainer>
                <LeftPane ref={leftRef}>
                    <MainHeader>About</MainHeader>
                </LeftPane>
                <RightPane>
                    <SectionOne>
                        <MainHeader className="about__right">One</MainHeader>
                    </SectionOne>
                    <SectionTwo>
                        <MainHeader className="about__right">Two</MainHeader>
                    </SectionTwo>
                    <SectionThree>
                        <MainHeader className="about__right">Three</MainHeader>
                    </SectionThree>
                </RightPane>
            </PaneContainer>
        </AboutSection>
    )
}

export default About
