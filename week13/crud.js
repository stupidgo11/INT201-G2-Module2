const firstDiv = document.body.firstElementChild
console.log(firstDiv)
const firstDivAttributes = firstDiv.attributes //get all attribute of any element
console.log(firstDivAttributes) //length=2, id and class attributes
Array.from(firstDivAttributes).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})
console.log(firstDiv.getAttribute('id')) //return value of specified attribute 'id'
console.log(firstDiv.getAttribute('class'))
//return value of specified attribute 'name'
const firstAttribute = firstDivAttributes[0]
console.log(firstAttribute.ownerDocument)
console.log(firstAttribute.ownerElement)

//create a new attribute name 'owner' with value 'umaporn'
firstDiv.setAttribute('owner', 'umaporn')

//create a new <p> under div.courses
const newPEle = document.createElement('p') //<p></p>

//textContent is tran everything to text includes white space, dont know HTML tag
//newPEle.textContent = '<span style="color:red">Client web Programming II</span>' //<span style="color:red">Client web Programming II</span>

//textContent is tran everything to text, know HTML tag but get only text
//newPEle.innerText = '<span style="color:red">Client web Programming II</span>' //<span style="color:red">Client web Programming II</span>

//innerHTML is tran everything to HTML tag
newPEle.innerHTML = '<span style="color:red">Client web Programming II</span>' //<p>Client web Programming II</p>

newPEle.setAttribute('id', 'int203') //id="int203"
newPEle.setAttribute('class', 'courses') //class="courses"
const divCoursesParent = document.getElementById('bscit-courses')

//add
//divCoursesParent.appendChild(newPEle) //add to last child
// //insert
// const refNode = divCoursesParent.lastElementChild
// divCoursesParent.insertBefore(newPEle, refNode)

//replace : update
const refNode = divCoursesParent.lastElementChild
divCoursesParent.replaceChild(newPEle,refNode) 

//remove : delete
divCoursesParent.removeChild(newPEle)


