const rootNode = window.document
console.log(rootNode)
console.log(rootNode.nodeName) //#document
console.log(rootNode.nodeType) //9
console.log(rootNode.nodeValue) //null

console.log(document.documentElement) //html element
console.log(document.documentElement.nodeName) //HTML
console.log(document.documentElement.nodeType) //1
console.log(document.documentElement.nodeValue) //null

console.log(document.body) //body element
console.log(document.body.nodeName) //BODY
console.log(document.body.nodeType) //1
console.log(document.body.nodeValue) //null

console.log(document.head) //head element
console.log(document.head.nodeName) //HEAD
console.log(document.head.nodeType) //1
console.log(document.head.nodeValue) //null

//title can only Set and Get
console.log(document.title) //title element
console.log(document.title.nodeName) //undefined
console.log(document.title.nodeType) //undefined
console.log(document.title.nodeValue) //undefined

//node at head
const headElement = document.head
console.log(headElement)

//Child relationship
//1. childNodes (NodeList data type) = querychildren with all node types -> including white space
const headChildren1 = headElement.childNodes
console.log(headChildren1)

console.log('length:', headChildren1.length) //5
headChildren1.forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})

//2. children (HTMLCollection data  type) = query children with ELEMENT type only
//array-like can't use array method
//array-like to array
const headChildren2 = headElement.children
console.log('length:', headChildren2.length) //2
Array.from(headChildren2).forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})

//fast way to get child by index
//get first child
console.log(headElement.firstChild)
console.log(headElement.firstElementChild)
//get last child
console.log(headElement.lastChild)
console.log(headElement.lastElementChild)

//parent relationship
//get parent including all node types
const headParentNode = headElement.parentNode
//get parent only element node type
const headParentElement = headElement.parentElement
console.log(headParentNode)
console.log(headParentElement)

//sibling relationship
//get previous sibling including all node types
const headPreviousSiblingNode = headElement.previousSibling
console.log(headPreviousSiblingNode)
//get previous sibling only element node type
const headPreviousSiblingElement = headElement.previousElementSibling
console.log(headPreviousSiblingElement)

//get next sibling including all node types
const headNextSiblingNode = headElement.nextSibling
console.log(headNextSiblingNode)
//get next sibling only element node type
const headNextSiblingElement = headElement.nextElementSibling
console.log(headNextSiblingElement)
