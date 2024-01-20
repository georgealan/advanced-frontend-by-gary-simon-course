const button = document.querySelector('button')
const title = document.querySelector('h1')
let quote = 'George is the best programmer in the whole world!!!'

button.addEventListener('click', () => {
  title.innerText = quote
})