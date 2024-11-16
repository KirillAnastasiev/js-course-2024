const greetingParagraph = document.querySelector('#greeting')
const greetingButton = document.querySelector('#hello-btn')

greetingButton.onclick = () => {
    greetingParagraph.innerHTML = 'Hello, Kirill'
    greetingParagraph.style.color = 'navy'
}