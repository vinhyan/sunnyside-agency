const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const close = document.querySelector('.close');



const app = () => {

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        // burger.style.display = 'none';
        // close.classList.add('active');


    })

    close.addEventListener('click', () => {
        // nav.classList.remove('active');
        // burger.style.display = 'block';
        // close.classList.remove('active');
    })


}



app();