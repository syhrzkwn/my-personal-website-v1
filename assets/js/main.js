/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)

   if (toggle && nav) {
      toggle.addEventListener('click', () => {
         nav.classList.toggle('show-menu')
      })
   }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
      }
      else {
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
      }
   })
}
window.addEventListener('scroll', scrollActive)

/* ===== CHANGE BACKGROUND HEADER ===== */
function scrollHeader() {
   const header = document.getElementById('header')

   if (this.scrollY >= 300) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
   const scrollTop = document.getElementById('scroll-top')

   if (this.scrollY >= 300) scrollTop.classList.add('show-scroll');
   else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*===== MIXITUP FILTER PROJECT =====*/
const mixer = mixitup('.project__container', {
   selectors: {
      target: '.project__content'
   },
   animation: {
      duration: 400
   }
});

/* Link active Project*/
const linkProject = document.querySelectorAll('.project__item')

function activeProject() {
   if (linkProject) {
      linkProject.forEach(l => l.classList.remove('active-project'))
      this.classList.add('active-project')
   }
}
linkProject.forEach(l => l.addEventListener('click', activeProject))