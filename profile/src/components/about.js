import styled from 'styled-components';
import profile from '../assets/profilePic.jpg'
import Wife from '../assets/lithopaneBeta.jpg'
import stormlight from '../assets/stormlight.webp'

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
        /* list-style-position: inside; */
    }
    hr.solid {
        border-left: 1px solid black;
        border-right: 1px solid grey;
    }

    img{
        width: 350px;
        transform: scaleX(-1);
        border-radius: 15px;
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
                        <img src={profile} alt='profilePicture'/>
                    </div>
                    <div className='tidbit'>
                        <h3> Full Stack Web Developer </h3>
                        <h5> Lambda School Alumni </h5>
                    </div>
                    <hr class="solid" />
                    <div className='tidbit'>
                        <h4>Full Stack Skills</h4>
                        <ul>
                            <li>HTML, CSS, Javascript</li>
                            <li>React, Redux, Bootstrap</li>
                            <li>Node.js, PostgreSQL, Knex</li>
                            <li>QA testing with Cypress & jest</li>
                        </ul>
                    </div>
                    <div className='tidbit'>
                        <h4>Interests</h4>
                        <ul>
                            <li>Game Development with Unity</li>
                            <li>Python and C#</li>
                        </ul>
                    </div>
                    <hr class="solid" />
                    <div className='tidbit'>
                        <h4>Hobbies</h4>
                        <ul>
                            <li>3D Printing</li>
                            <li>Video & Board Games</li>
                            <li>Learning the Accordion</li>
                        </ul>
                    </div>
                </div>                
                <div className='bio'>
                    <h4>Bio</h4>
                    <br/>
                    <h5>Born and Raised in Utah, spent some years in California in High School.</h5>
                    <p>Married to my wonderful wife!</p>
                    <img src={Wife} alt='wife'/>
                    <div className='nerd'></div>
                    <p>Biggest Nerd you'll ever know! (Lets talk Marvel, DC, Star Wars, Tolkien, Video Games, Movies, and especially Brandon Sanderson Books!)</p>
                    <p>I collect retro video games and comic books</p>
                    <p>I rate all types of Root Beers with over 100 different brands tried (You should try O'zell Root Beer ⭐⭐⭐⭐⭐)</p>
                </div>
            </div>
        </AboutDiv>
    )
}

export default About