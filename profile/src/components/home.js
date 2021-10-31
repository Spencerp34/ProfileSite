import styled from 'styled-components';
// import Carousel from './carousel';
import pyramidPlanetImg from '../assets/pyramid-merch.PNG'
import littleAcorns from '../assets/littleAcorns.PNG'


const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 150px;
    min-height: 80vh;
    a{
        display: block;
        text-decoration: none;
        color: black;
        margin-bottom: 5vh;
    }
    .info{
        min-height: 15vh;
    }

    .construction{
        border-bottom: solid 10px;
        border-top: solid 10px;
        border-image: repeating-linear-gradient( -75deg, yellow, yellow 10px, black 10px, black 20px) 20;
    }
    .sites{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    img{
        height: 50vw;
        border-radius: 15px;
    }
    .website{
        width: 80%;
    }
    span{
        color: yellow;
    }

    @media (max-width: 850px){
        .website{
            width: 80%;
            margin-top: 10vh;
        }
        #comingSoon{
            width: 50vw;
        }
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
                    <a target="_blank" className='website' href='https://little-acorns-spencerp34.vercel.app/'>
                        <div className='info'>
                            <h3>Little Acorns Pre-School</h3>
                            <p> Check out this website to see: </p>
                            <p> Photo galleries, form inquiries, little business.</p>
                        </div>
                        <img src={littleAcorns} width='80%' alt='' />
                    </a>
                    <a  target="_blank" href='https://pyramid-planet.vercel.app/' className='website' >
                        <div className='info'>
                            <h3>Pyramid Planet</h3>
                            <p> Check out this website to see: </p>
                            <p> Interactive UI, Merchandise Store/Shopping Cart, Single Page Application.</p>
                        </div>
                        
                        <img src={pyramidPlanetImg} width='80%' alt='' />
                    </a>
                    <a target="_blank" className='website'  >
                        <div className='info'>
                            <div className='construction'>
                                <h3>Midnight Snax <span>(under construction)</span></h3>
                                <p> Check out this website to see: </p>
                                <p> Brochure website to see everything a customer would need to know about your restaurant, catering/applying for a job, Single Page Application.</p>
                                <img src='https://media.giphy.com/media/fUYp0iOzQfC540KCs4/giphy.gif' id='comingSoon' alt='coming_soon' height='50%'/>
                            </div>
                        </div>                        
                    </a>
                </div>
            </Wrap>
        </div>
    )
}

export default Home