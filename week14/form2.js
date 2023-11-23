const submitButton = document.getElementById('submit-btn-01')
submitButton.addEventListener('click', (e) => {
  e.preventDefault() //use to handler on client before forward to server
  console.log('submit clicked')
  const userEle = document.querySelector('#input-user')
  const pswEle = document.querySelector('#input-psw')

  const pElement = document.querySelector('p')
  if (userEle.value.length === 0 || pswEle.value.length === 0) {
    pElement.textContent = 'missing some values'
  } else {
    pElement.textContent = 'Complete input'
  }
})
