const btnLeft = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const imgs = document.querySelectorAll('.img1, .img2, .img3')

imgs[0].classList.add('item-active')
imgs[0].style.opacity = '1'

btnLeft.addEventListener('click', trocaPrev)
btnNext.addEventListener('click', trocaNext)

let contador = 0

function trocaPrev(event) {
    imgs[contador].classList.remove('item-active')
    contador--
    if (contador < 0) {
        contador = imgs.length - 1
    }
    imgs[contador].classList.add('item-active')
    aplicarAnimacao(imgs[contador])
}

function trocaNext(event) {
    imgs[contador].classList.remove('item-active')
    contador++
    if (contador >= imgs.length) {
        contador = 0
    }
    imgs[contador].classList.add('item-active');
    aplicarAnimacao(imgs[contador])
}

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