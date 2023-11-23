const submitButton = document.getElementById('submit-btn-01')
submitButton.addEventListener('click', (e) => {
  e.preventDefault() //use to handler on client before forward to server
  console.log('submit clicked')
  const userEle = document.querySelector('#input-user')
  const pswEle = document.querySelector('#input-psw')
  const pElement = document.querySelector('p')
  if (userEle.value.length === 0 || pswEle.value.length === 0) {
    pElement.textContent = 'some values are missing, please check'
  } else {
    pElement.textContent = 'Your input are complete'
  }
})

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded')
})
window.addEventListener('load', () => {
  console.log('Load')
})
window.addEventListener('beforeunload', () => {
  console.log('before unload')
  localStorage.setItem('myCat', 'Tom')
})

const inputElements = document.querySelectorAll('input')
inputElements[0].addEventListener('focus', () => {
  console.log('input focused')
})
inputElements[0].addEventListener('blur', () => {
  console.log('input blured')
})
