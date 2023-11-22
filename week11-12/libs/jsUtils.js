function echo(msg) {
  return msg
}
 const NAME = 'Natthaphol Nirattisaikul'
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
const MAX_VALUE = 999
//common js module use only in js to js
module.exports = { sum, echo, MAX_VALUE: MAX_VALUE, NAME }

