import styled from 'styled-components';

const Wrap = styled.div`
    border-radius: 5px;
    padding: 5px;
    width: 60%;
    margin: auto;
    overflow: hidden;

    .slide{
        display: flex;
        width: 100%;
        height: 500px;
        border: 5px solid black;
    }

`

const dummyData = [
    {
        img: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        caption: 'Stretchy Mozzerella'
    },
    {
        img: 'https://images.unsplash.com/photo-1608039858788-667850f129f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        caption: 'Grilled Cheese'
    },
    {
        img: 'https://images.unsplash.com/photo-1579032121374-31c8ba70ec65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
        caption: 'Savory Queso'
    },
]


function getImg(data){
    // return data
    const newArr = []
    data.map(product => {
        newArr.push(product.img)
    })
    newArr.unshift(data[0].img)
    newArr.push(data[data.length-1].img)
    return newArr
}

const carouselSlide = document.querySelector('.slide')
const carouselImages = getImg(dummyData)

const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')

let counter = 1;
const size = carouselImages[0].clientWidth;
console.log('size', size)

carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevButton.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


carouselSlide.addEventListener('transitioned', () => {
    if(carouselSlide[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
    if(carouselSlide[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };

})


function Carousel(){
    return(
        <div className ='carousel'>
            <Wrap>
                <div className='slide'>
                    
                </div>
            </Wrap>
            <button id='prevButton'>Prev</button>
            <button id='nextButton'>Next</button>
        </div>
    )
}

export default Carousel