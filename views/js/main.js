const toggles = document.querySelectorAll('nav .toggle')
const nav = document.querySelector('nav.container-nav')
const body = document.querySelector('body')

for (const toggle of toggles) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show')

    let cond = nav.className.includes('show')
    cond ? (body.style.position = 'fixed') : (body.style.position = 'relative')
  })
}

const links = document.querySelectorAll('.menu ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
    body.style.position = 'relative'
  })
}
