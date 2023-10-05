//push() return array length after adding element at array[array.length] to array
//pop() return array length after delete element at array[array.length] to array
//unshift() return array length after adding element at array[0] to array
//shift() return array length after delete element at array[0] to array
//splice() return array contains remove elements of array and can add new elements to array
//splice(start,deleteCount,addNewElement)

const fruits = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
//splice with remove
const deleteFruits = fruits.splice(1, 2)
console.log(fruits)
console.log(deleteFruits)
