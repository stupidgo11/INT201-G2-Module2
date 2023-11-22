function echo(msg) {
  return msg
}
export const NAME = 'Natthaphol Nirattisaikul'
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
const MAX_VALUE = 999
//es module use only in js to html
export { echo, sum as default, MAX_VALUE }
