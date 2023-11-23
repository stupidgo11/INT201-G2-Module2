document.addEventListener('DOMContentLoaded', () => {
  console.log('Your DOM tree built')
})
window.addEventListener('load', () => {
  console.log('Your Applciation Loaded')
})
window.addEventListener('beforeunload', () => {
  localStorage.setItem('myCat', 'Tom')
})
window.addEventListener('mousemove', (e) => {
  console.log(`x:${e.screenX}, y:${e.screenY}`)
})
const userElement = document.getElementById('input-user')
const pswElement = document.getElementById('input-psw')
userElement.addEventListener('focus', () => {
  console.log('Your focus is on username')
})
userElement.addEventListener('blur', () => {
  console.log('Your username input textbox is blured')
})

//using keydown and keypress only to detect number characters 0-9
userElement.addEventListener('keydown', (e) => {
  console.log(`${e.key}, ${e.code}`)
  if (e.key >= 0 && e.key <= 9) {
    e.preventDefault()
  }
})
// when user release enter key, text value on username will show at <p> element
userElement.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const pElement = document.querySelector('p')
    pElement.textContent = e.target.value
  }
})
userElement.addEventListener('input', (e) => {
  const pElement = document.querySelector('p')
  pElement.textContent = e.target.value
})
