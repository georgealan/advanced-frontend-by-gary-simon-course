const switchBtn = document.getElementById('switch')
const handle = document.getElementById('handle')
let switchStatus = 0 // 0 is dark, 1 is light

switchBtn.addEventListener('click', toggleTheme)

function toggleTheme() {
  if(switchStatus === 0) {
    document.documentElement.style.setProperty('--background-color', 'white')
    document.documentElement.style.setProperty('--text-color', 'black')
    handle.classList.add('move-right')
    switchStatus = 1
  } else {
    document.documentElement.style.setProperty('--background-color', '#232323')
    document.documentElement.style.setProperty('--text-color', 'white')
    handle.classList.remove('move-right')
    switchStatus = 0
  }
}