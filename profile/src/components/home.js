import styled from 'styled-components';
// import Carousel from './carousel';
import pyramidPlanetImg from '../assets/pyramid-merch.PNG'
import littleAcorns from '../assets/littleAcorns.PNG'


const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    a{
        display: block;
        text-decoration: none;
        color: black;
        max-height: 50vh;
    }

    .construction{
        border-bottom: solid 10px;
        border-top: solid 10px;
        border-image: repeating-linear-gradient( -75deg, yellow, yellow 10px, black 10px, black 20px) 20;
    }
    .sites{
        width: 90%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
    }
    img{
        border-radius: 15px;
    }
    .website{
        width: 30%;
    }
    span{
        color: yellow;
    }

`

function Home(){
    return(
        <div className='home'>
            <Wrap>
                <h2>Welcome to my Portfolio!</h2>
                <h2>Click on any to open a new tab to check it out!</h2>
                <br/>
                <div className='sites' >
                    <a href='https://pyramid-planet.vercel.app/' className='website' >
                        <h3>Pyramid Planet</h3>
                        <p> Check out this website to see: </p>
                        <p> Interactive UI, Merchandise Store/Shopping Cart, Single Page Application.</p>
                        <img src={pyramidPlanetImg} width='80%' alt='' />
                    </a>
                    <a className='website'  >
                        <div className='construction'>
                            <h3>Midnight Snax <span>(under construction)</span></h3>
                            <p> Check out this website to see: </p>
                            <p> Brochure website to see everything a customer would need to know about your restaurant, catering/applying for a job, Single Page Application.</p>
                        </div>
                        <img src='https://media.giphy.com/media/fUYp0iOzQfC540KCs4/giphy.gif' height='50%'/>
                    </a>
                    <a className='website' href='https://www.littleacornsschool.com/'>
                        <h3>Little Acorns Pre-School</h3>
                        <p> Check out this website to see: </p>
                        <p> Photo galleries, form inquiries, little business.</p>
                        <img src={littleAcorns} width='80%' alt='' />
                    </a>
                </div>
            </Wrap>
        </div>
    )
}

export default Home