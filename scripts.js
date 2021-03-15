const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
menuToggle.classList.toggle('active')
showcase.classList.toggle('active')
}) 

const menuItems = document.querySelectorAll('.menu ul li a')
menuItems.forEach(link => {
    link.onclick = () => {
        addBodyClass("animate-out")
        redirectAfterTime(link, 300)
    }
})

function addBodyClass(classes) {
    document.body.classList.add(classes)
}

function redirectAfterTime(link, time = 200) {
    setTimeout(() => {
        location.href = link.dataset.href
    }, time)
}
