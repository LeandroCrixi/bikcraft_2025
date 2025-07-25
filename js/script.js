// Enable menu links
const links = document.querySelectorAll('.header-menu a')

const enableLink = (link) => {
    const url = location.href
    const href = link.href

    if (url.includes(href)) {
        link.classList.add('active')
    }
}

links.forEach(enableLink)

// Enable quote items
const parameters = new URLSearchParams(location.search)
const enableProduct = (parameter) => {
    const element = document.getElementById(parameter)
    if (element) {
        element.checked = true
    }
}
parameters.forEach(enableProduct)

// FAQ
const faq = document.querySelectorAll('.faq button')

const enableFaq = (e) => {
    const question = e.currentTarget
    const controls = question.getAttribute('aria-controls')
    const answer = document.getElementById(controls)

    answer.classList.toggle('active')
    const active = answer.classList.contains('active')
    question.setAttribute('aria-expanded', active)
}
const faqEvents = (question) => {
    question.addEventListener('click', enableFaq)
}

faq.forEach(faqEvents)

// Pics Bikes galery
const galery = document.querySelectorAll('.bike-img img')
const galeryContainer = document.querySelector('.bike-img')
const imgUpdate = (e) =>{
    const img = e.currentTarget
    const media = matchMedia('(min-width: 1000px)').matches
    if(media){
        galeryContainer.prepend(img)
    }
}
const galeryEvents = (img) =>{
    img.addEventListener('click', imgUpdate)
}

galery.forEach(galeryEvents)

// Animation
if(window.SimpleAnime){
    new SimpleAnime()
}