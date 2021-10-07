import styled from 'styled-components';
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import github from '../assets/github.png'
import linkedIn from '../assets/linkedIn.png'



const ContactDiv = styled.div`
    *{
        font-size: 3rem;
    }
    a{
        color: black;
    }
    .all{
        display: flex;
        flex-wrap: wrap;       
        justify-content: space-between;
    }
    .b{
        width: 45%;
    }
`

function Contact(){
    return(
        <ContactDiv>
            <h2> Contact Me</h2>            
            <div className='all'>
                <div className='b phone'>
                    {/* <img src={phone} alt='' /> */}
                    <h3>📲 Phone:</h3>
                    <h4>(925) 915 - 1853</h4>
                </div>                
                <div className='b email'>
                    {/* <img src={email} alt='' /> */}
                    <h3> ✉️ Email:</h3>
                    <h4>spencerp34@yahoo.com</h4>
                </div>                
                <div className='b linkedIn'>
                     {/* <img src={linkedIn} alt='' /> */}
                    <h3>💼 LinkedIn:</h3>
                    <a href="http://www.linkedin.com/in/spencerp34/" target='_blank'>
                        <h4>linkedin.com/in/spencerp34/</h4>
                    </a>        
                </div>                   
                <div className='b github'>
                    {/* <img src={github} alt='' /> */}
                    <h3>💻 GitHub:</h3>
                    <a href="http://github.com/Spencerp34" target='_blank'>
                        <h4>github.com/Spencerp34</h4>
                    </a>
                </div>
                
            </div>
            
            
            
        </ContactDiv>
    )
}

export default Contact