const btnLeft = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const imgs = document.querySelectorAll('.img')

imgs[0].classList.add('item-active')
imgs[0].style.opacity = '1'
let contador = 0

btnLeft.addEventListener('click', () => {
    imgs[contador].classList.remove('item-active')
    contador--
    if (contador < 0) {
        contador = imgs.length - 1
    }
    imgs[contador].classList.add('item-active')
    aplicarAnimacao(imgs[contador])
})

btnNext.addEventListener('click', () => {
    imgs[contador].classList.remove('item-active')
    contador++
    if (contador >= imgs.length) {
        contador = 0
    }
    imgs[contador].classList.add('item-active');
    aplicarAnimacao(imgs[contador])
})

function aplicarAnimacao(element) {
    anime({
        targets: element,
        borderRadius: ['50%', '5%'],
        opacity: ['0%', '100%'],
        delay: 100,
        duration: 500,
        loop: 1,
        easing: 'linear'
    });
}