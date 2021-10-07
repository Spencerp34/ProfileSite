import styled from 'styled-components';

const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    min-height: 5vh;
    width: 100%;
    position: static;
    left: 0;
    bottom: 0;
`

function Footer(){
    return(
        <footer>
            <FooterDiv>
            </FooterDiv>
        </footer>
    )
}

export default Footer;