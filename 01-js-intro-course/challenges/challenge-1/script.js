const boxOne = document.getElementById('box-one')
const boxTwo = document.getElementById('box-two')
const btnOne = document.getElementById('btn-1')
const btnTwo = document.getElementById('btn-2')
let showDetails = false

function showPanel() {
  if (showDetails) {
    boxTwo.classList.remove('mask')
    btnOne.classList.add('mask')
    showDetails = false
  } else {
    boxTwo.classList.add('mask')
    btnOne.classList.remove('mask')
    showDetails = true
  }
}

btnOne.addEventListener('click', showPanel)
btnTwo.addEventListener('click', showPanel)
