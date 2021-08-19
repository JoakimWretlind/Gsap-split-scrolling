import styled from 'styled-components';

/** SHARED **/
export const MainHeader = styled.h1`
    text-transform: uppercase;
    color: #fff;
    letter-spacing: .3rem;
    font-size: clamp(3rem, 7vw, 6rem);
`;

/** ABOUT **/
export const AboutSection = styled.section`
    display: grid;
    background: black;
`;

export const PaneContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
`;

/** LeftPane **/
export const LeftPane = styled.div`
    background: #C5C3B8;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

/** RightPane **/
export const RightPane = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;    
`;

/** AboutSection **/
export const SectionOne = styled.div`
    height: 100%;
    width: 100%;
    background: #B5B1A5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7rem 3rem;
    min-height: 75vh;
`;

export const SectionTwo = styled.div`
    height: 100%;
    width: 100%;
    background: #A5A398;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7rem 3rem;
    min-height: 75vh;
`;

export const SectionThree = styled.div`
    height: 100%;
    width: 100%;
    background: #8D8781;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7rem 3rem;
    min-height: 75vh;
`;