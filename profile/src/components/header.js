import {Link} from "react-router-dom";
import styled from 'styled-components';

const Heading = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin-bottom: 5vh;
  .logo{
      text-decoration: none;
      color: black;
      font-size: 4vw;
  }

`

const HeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 95%;
  padding: 1%;

  @media (max-width: 450px){
    .logo{
      font-size: 5vw;
    }
  }
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 10%;
  
  .nav {
    margin-left: 5%;
    text-decoration: none;
    font-size: 3vw;
    font-weight: bold;
    color: black;
    transition: .3s;
    :hover{
      color: rgb(216, 73, 73);
      font-weight: bold;
    }
  }

  @media (max-width: 650px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .nav{
      font-size: 4vw;
    }
  }
`

function Header(){
    return(
      <header>
        <Heading>
          <HeadWrap>
              <Link className='logo' to='/'>SpencerPatterson.dev</Link>
          </HeadWrap>
          <NavBar>
            <Link className="nav" to='/'>Home</Link>
            <Link className="nav" to='/About'>About</Link>
            <Link className="nav" to='/Widgets'>Fidget Widgets</Link>
            <Link className="nav" to='/Contact'>Contact</Link>
          </NavBar>
        </Heading>
      </header>
        
    )
}

export default Header