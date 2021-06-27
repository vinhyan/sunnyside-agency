const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const arrow = document.querySelector('.arrow');
const main = document.querySelector('main');



const app = () => {

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    

    })

    arrow.addEventListener('click', () => {
        console.log('hi')
        main.scrollIntoView({behavior: "smooth"})

    })


}



app();