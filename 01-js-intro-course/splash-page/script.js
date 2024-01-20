const splash = document.querySelector('.splash')
const headline = document.querySelector('h1')
const duration = 2300

function removeSplash() {
  splash.classList.add('remove-splash')
  headline.classList.add('headline-intro')
}

setTimeout(() => {
  removeSplash()
}, duration)