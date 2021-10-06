import styled from 'styled-components';
// import Carousel from './carousel';
import pyramidPlanetImg from '../assets/pyramid-merch.PNG'
import littleAcorns from '../assets/littleAcorns.PNG'


const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
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
`

function Home(){
    return(
        <div className='home'>
            <Wrap>
                <h2>Welcome to my Portfolio!</h2>
                <div className='sites' >
                    <div className='website' >
                        <h3>Midnight Snax</h3>
                        <p> Check out this website to see: </p>
                        <p> Brochure website to see everything a customer would need to know about your restaurant, catering/appling for a job, Single Page Application.</p>
                        <img src={'https://i.ytimg.com/vi/NRxu32EmWRY/maxresdefault.jpg'} width='80%' alt='' />
                    </div>
                    <div className='website' >
                        <h3>Pyramid Planet</h3>
                        <p> Check out this website to see: </p>
                        <p> Interactive UI, Merch Store/Shopping Cart, Single Page Application.</p>
                        <img src={pyramidPlanetImg} width='80%' alt='' />
                    </div>
                    <div className='website' >
                        <h3>Little Acorns Pre-School</h3>
                        <p> Check out this website to see: </p>
                        <p> Photo galleries, form inquiries, little business.</p>
                        <img src={littleAcorns} width='80%' alt='' />
                    </div>
                </div>
            </Wrap>
        </div>
    )
}

export default Home