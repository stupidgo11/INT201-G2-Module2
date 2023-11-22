const body = document.body
const bodyChildNodes = body.childNodes
//NodeList array-like (implement for-each, cannot array methods) return children with all node types include white-space
const bodyChildren = body.children
//HTMLCollection (not implement for-each, cannot array methods) return children with Element type only

console.log(body)
console.log(bodyChildNodes)
console.log(bodyChildren)

bodyChildNodes.forEach((bcn) => {
  console.log(bcn)
})
console.log('----------')
//use Array.from() before use array method
Array.from(bodyChildren).forEach((bc) => {
  console.log(bc)
})

console.log(body.firstChild)
console.log(body.firstElementChild)
console.log(body.lastChild)
console.log(body.lastElementChild)

console.log(document.documentElement === document.firstElementChild)
console.log(document.documentElement === document)

console.log(document.documentElement) //html, root element
console.log(document) //root node

//query/select element by Id
const course201Ele = document.getElementById('int201')
console.log(course201Ele)

const course101Ele = document.querySelector('#int101')
console.log(course101Ele)

const bscitEle = document.querySelector('#int101,#bscit-courses') // query is find first element in tree
console.log(bscitEle)

const proCourse = document.querySelector('.programming')
console.log(proCourse)

//select/query a collection of element
const proEle = document.querySelectorAll('#int201, .programming')
console.log(proEle)

//find by css selector
const liEle = document.querySelectorAll('li')
console.log(liEle) //NodeList

//find with tag name
const liEle2 = document.getElementsByTagName('li')
console.log(liEle2) //HTMLCollection

//find with class name
const coureseEle = document.getElementsByClassName('courses')
console.log(coureseEle)

const divLectElement = document.querySelector('.lecturers')
//get <li> unser div.lecturer
const liDevLect = divLectElement.querySelectorAll('li')
console.log(liDevLect)
//get <li> under document node
const liAll = document.querySelectorAll('li')
console.log(liAll)

//select the first node with its id
const ulStudents1 = document.getElementById('students')
console.log(ulStudents1)
//select the first node with CSS selector
const ulStudents2 = document.querySelector('#students') //id selector
console.log(ulStudents2)
const programmingLect = document.querySelector('.programming') //class selector
console.log(programmingLect)
const ulStudents3 = document.querySelector('ul[id="students"]') //tag with attribute selector
console.log(ulStudents3)
const ulEle = document.querySelector('ul') //tag name
console.log(ulEle)
const divUl = document.querySelector('div>ul')
console.log(divUl)

//select a collection of specified condition
const programmingLect2 = document.getElementsByClassName('programming')
//return HTMLCollection data type - array-like (can use index or length, cannot use array function (forEach, filter, map,...))
console.log(programmingLect2)
console.log(programmingLect2.length)
const ulTagname = document.getElementsByTagName('ul')
console.log(ulTagname)
console.log(ulTagname.length)
//return HTMLCollection
const coursesEle = document.querySelectorAll('.courses')
console.log(coursesEle)
//NodeList data type - array-like (can use index, length) but NodeList implements only forEach but can not use other array functions
const divEle = document.getElementById('bscit-courses')
const courseUnderDiv = divEle.querySelectorAll('.courses')
console.log(courseUnderDiv)
const courseUnderDoc = document.querySelectorAll('.courses')
console.log(courseUnderDoc)

//correct, give one string selector
const firstNode1 = document.querySelector('#int101, .courses, #p-01')
console.log(firstNode1)
//incorrect, give more than one string selector
const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
console.log(firstNode2)