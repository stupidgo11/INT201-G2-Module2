function counter() {
  let count = 1
  function increment() {
    return count++
  }
  function decrement() {
    return count--
  }
  return { increment, decrement }
}
const c = counter()
c.increment()
c.decrement()
//destructuring
const { increment, decrement } = counter()
increment()
decrement()

const student = {
  id: 1,
  name: 'james'
}

const { name, id } = student
console.log(id)
