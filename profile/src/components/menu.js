import styled from 'styled-components';
import React, {useState} from 'react'



const MenuDiv = styled.div`

margin: 3%;

.menu-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all .5s ease-in-out;
}
.menu-btn__burger {
  content: '';
  position: absolute;
  width: 50px;
  height: 6px;
  background: #000;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}

.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 6px;
  background: #000;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}
.menu-btn__burger::before {
  transform: translateY(-16px);
}
.menu-btn__burger::after {
  transform: translateY(16px);
}

.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
    
`


function Menu(){
    const [menuOpen, setMenuOpen] = useState(false)
    function handleClick(){
        const menuBtn = document.querySelector('.menu-btn')
        if(!menuOpen) {
            menuBtn.classList.add('open');
            setMenuOpen(true);
        } else {
            menuBtn.classList.remove('open');
            setMenuOpen(false);
        }
    };




    return(
        <div className='Menu'>
            <MenuDiv>
                <div class="menu-btn" onClick={handleClick}>
                    <div class="menu-btn__burger"></div>
                </div>
            </MenuDiv>
        </div>
    )
}

export default Menu