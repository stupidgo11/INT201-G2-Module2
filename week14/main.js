const submitButton = document.getElementById('submit-btn-01')
submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const allInputEles = document.querySelectorAll('input')
  const validInput = Array.from(allInputEles).every((e) => e.value.length !== 0)
  const pEle = document.querySelector('p')
  if (!validInput) {
    pEle.textContent = 'missing username or password'
    pEle.style = 'color:red'
  } else {
    pEle.textContent = 'success'
    pEle.style = 'color:green'
  }
  console.log('submit clicked')
})
