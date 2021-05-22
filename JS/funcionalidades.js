class SlideStories{
    constructor(id){
        this.slide = document.querySelector(`[data-slide="${id}"]`)
        this.active = 0
        this.init()
    }
    activeSlide(index){
        this.active = index
        this.itens.forEach((item) => item.classList.remove('active'))
        this.itens[index].classList.add('active')
        this.thumbItens.forEach((item) => item.classList.remove('active'))
        this.thumbItens[index].classList.add('active')
        this.autoSlide()
    }



    prev (){
        if(this.active > 0){
            this.activeSlide(this.active - 1)
        }else{
            this.activeSlide(this.itens.length - 1)
        }
    }

    next (){
        if(this.active < this.itens.length - 1){
            this.activeSlide(this.active + 1)
        }else{
            this.activeSlide(0)
        }
    }

    addNavigation(){
        const nextBtn = this.slide.querySelector('.slide-next')
        const prevBtn = this.slide.querySelector('.slide-prev')
        nextBtn.addEventListener('click', this.next)
        prevBtn.addEventListener('click', this.prev)
    }

    addThumbItens(){
        this.itens.forEach(() => this.thumb.innerHTML += `<span></span>`)
        this.thumbItens = Array.from(this.thumb.children)
    }

    autoSlide(){
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.next, 5000)
    }

    init(){
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.itens = this.slide.querySelectorAll('.slide-itens > *')
        this.thumb = this.slide.querySelector('.slide-thumb')
        this.addThumbItens()
        this.activeSlide(0)
        this.addNavigation()
    }
}

new SlideStories('slide1')



/*//////////////////////////////////////////////////////////////////////////////*/

class Slide2Stories{
    constructor(id){
        this.slide2 = document.querySelector(`[data-slide="${id}"]`)
        this.active2 = 0 
        this.init()
    }

    activeSlide2(index){
        this.active2 = index
        this.itens2.forEach(item => item.classList.remove('active2'))
        this.itens2[index].classList.add('active2')
        this.thumbItens2.forEach(item => item.classList.remove('active2'))
        this.thumbItens2[index].classList.add('active2')
        this.autoSlide()
    }

    prev (){
        if(this.active2 > 0){
            this.activeSlide2(this.active2 - 1)
        }else{
            this.activeSlide2(this.itens2.length - 1)
        }
    }

    next (){
        if(this.active2 < this.itens2.length - 1){
            this.activeSlide2(this.active2 + 1)
        }else{
            this.activeSlide2(0)
        }
    }

    addNavigation(){
        const nextBtn = this.slide2.querySelector('.slide2-next')
        const prevBtn = this.slide2.querySelector('.slide2-prev')
        nextBtn.addEventListener('click', this.next)
        prevBtn.addEventListener('click', this.prev)
    }

    addThumbItens(){
        this.itens2.forEach(() => (this.thumb2.innerHTML += `<span></span>`))
        this.thumbItens2 = Array.from(this.thumb2.children)
        console.log(this.thumbItens2)
    }

    autoSlide(){
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.next, 5000)
    }

    init(){
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.itens2 = this.slide2.querySelectorAll('.slide2-itens > *')
        this.thumb2 = this.slide2.querySelector('.slide2-thumb')
        this.addThumbItens()
        this.activeSlide2(0)
        this.addNavigation()
    }
}

    new Slide2Stories('area-slide2')

// ANIMAÇÃO DOS MENUZINHOS 



const target = document.querySelectorAll('[data-animeSection2Sticky]')
const animationClassSticky = 'animeiteSticky'

// const topojanela = window.pageYOffset

// const windowTop = window.pageYOffset + 612.9

function animeSectionScroll(){

    // const windowTop = window.pageYOffset + 612.9;

    const thiago = window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach(function(element){
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClassSticky)
        }else if ((windowTop) < element.offsetTop) {
            element.classList.remove(animationClassSticky)
        }
    })
}

animeSectionScroll()

if (target.length) {
    window.addEventListener('scroll', function(){
        animeSectionScroll()
    })   
}



///////////////////////////////////////////////////
/*
const target2 = document.querySelectorAll('[data-animeSection2End]')
const animationClassEnd = 'animeiteEnd'

function animeSection2Scroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3.5) / 4)
    target2.forEach(function(element2){
        if ((windowTop) > element2.offsetTop) {
            element2.classList.add(animationClassEnd)
        }else{
            element2.classList.remove(animationClassEnd)
        }
    })
}

animeSection2Scroll()

if (target2.length) {
    window.addEventListener('scroll', function(){
        animeSection2Scroll()
    })   
}
*/

var testethiago = 6

function testeee() {

}