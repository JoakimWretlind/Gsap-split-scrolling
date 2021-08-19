import styled from 'styled-components';
import { MainHeader } from './Styling';
import { SharedSection } from './SharedCSS';

const Section = styled.section`
    ${SharedSection};
    background: #D9D6CE;
`

const Home = () => {
    return (
        <Section>
            <MainHeader>Home</MainHeader>
        </Section>
    )
}

export default Home
