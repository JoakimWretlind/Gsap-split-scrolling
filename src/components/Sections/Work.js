import styled from 'styled-components';
import { MainHeader } from './Styling';
import { SharedSection } from './SharedCSS';

const Section = styled.section`
    ${SharedSection};
    background: #73706A;
`

const Work = () => {
    return (
        <Section>
            <MainHeader>Work</MainHeader>
        </Section>
    )
}

export default Work
