import styled from 'styled-components';
import { MainHeader } from './Styling';
import { SharedSection } from './SharedCSS';

const Section = styled.section`
    ${SharedSection};
    background: #4C453D;
`

const Contact = () => {
    return (
        <Section>
            <MainHeader>Contact</MainHeader>
        </Section>
    )
}

export default Contact
