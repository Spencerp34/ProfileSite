import styled from 'styled-components';

const AboutDiv = styled.div`
    display: flex;
    justify-content: center;

    .about{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
    }
    
    .info{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .tidbit{
        width: 40%;
        height: 25vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2vh;
    }
    
    h3{
        font-size: 2rem;
    }
    h4{
        font-size: 1.5rem;
        margin: 5px;
    }
    h5{
        font-size: 1.25rem;
        margin-top: -2.5vh;
    }

    ul{
        list-style-type: square;
        flex-direction: column;
        list-style-position: inside;
    }
    hr.solid {
        border-left: 1px solid black;
        border-right: 1px solid grey;
    }


`

function About(){
    return(
        <AboutDiv>
            <div className='about'>
                <h2> About Me</h2>
                <div className='info'>
                    <div className='tidbit left'>
                        <h3>Spencer Patterson</h3>
                    </div>
                    <hr class="solid" />
                    <div className='tidbit'>
                        <h3> Full Stack Web Developer </h3>
                        <h5> Lambda School Alumni </h5>
                    </div>
                    <div className='tidbit'>
                        <h4>Hobbies</h4>
                        <ul>
                            <li>3D Printing</li>
                            <li>Accordion</li>
                            <li>Gaming</li>
                        </ul>
                    </div>
                    <hr class="solid" />
                    <div className='tidbit'>
                        <h4>Full Stack Skills</h4>
                        <ul>
                            <li>HTML, CSS, Javascript</li>
                            <li>React, Redux, Bootstrap</li>
                            <li>Node.js, PostgreSQL, Knex</li>
                        </ul>
                    </div>
                    
                </div>                
            </div>
        </AboutDiv>
    )
}

export default About