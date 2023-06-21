const header = document.getElementById('header')
const navBars = document.querySelector('.nav-bars')
const closeNav = document.querySelector('.close-nav')
const siteNav = document.getElementById('site-nav')
const homeHeroCntr = document.querySelector('.home-hero-cntr')
const homeHeroOverlappingImg = document.getElementById('home-hero-overlapping-img')
const contactForm = document.getElementById('contact-form')


window.addEventListener('change', _=>{
    //Gets the viewport height and multiplies it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then sets the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
})

/*WHEN THE HAMBURGER MENU ICON IS CLICKED, THE NAVIGATION MENU OPENS*/
navBars.addEventListener('click', _=> {
    openNavMenu()
})

/*WHEN THE CANCLE ICON IS CLICKED, THE NAVIGATION MENU CLOSES*/
closeNav.addEventListener('click', _=> {
    closeNavMenu()
})

/*OPENS THE SITE'S NAVIGATION MENU WHEN CALLED*/
function openNavMenu() {
    siteNav.style.transition = '700ms transform cubic-bezier(0.075, 0.82, 0.165, 1)'
    siteNav.classList.add('open-nav-menu')
}

/*CLOSES THE SITE'S NAVIGATION MENU WHEN CALLED*/
function closeNavMenu() {
    siteNav.classList.remove('open-nav-menu')
}

// CHANGES THE OPACITY OF THE HERO OVERLAPPING IMAGE ON HOVER 
function unGlitchHeroImage() {
    homeHeroOverlappingImg.style.opacity = '0'
}

function glitchHeroImage() {
    homeHeroOverlappingImg.style.opacity = '.3'
}

if(homeHeroCntr) {
    homeHeroOverlappingImg.addEventListener('mouseover', unGlitchHeroImage)
    homeHeroCntr.addEventListener('mouseover', unGlitchHeroImage)
    homeHeroOverlappingImg.addEventListener('mouseleave', glitchHeroImage)
    homeHeroCntr.addEventListener('mouseleave', glitchHeroImage)
}

// CHANGES THE BACKGROUND COLOR OF THE HEADER AND THE OPACITY OF THE HERO OVERLAPPING IMAGE  ON SCROLL
let lastKnownScrollPosition = 0
document.addEventListener('scroll', _=> {
    changedHeaderBackgroundColor()
})

function changedHeaderBackgroundColor() {
    lastKnownScrollPosition = window.scrollY
    header.style.transition = '1s background ease'
    if(lastKnownScrollPosition === 0) {
        header.style.background = 'none'

        if (homeHeroOverlappingImg) {
            glitchHeroImage()
        }
    } else {
        header.style.background = '#161616'
        if (homeHeroOverlappingImg) {
            unGlitchHeroImage()
        }
    }
}

//SHOWS HIDDEN ELEMENTS ON SCROLL
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach(el => {
    observer.observe(el)
})