module.exports = function reverse (n) {
  const num = n.toString();
  const num1 = num.split(" ");
  const newNum = num1.reverse();
const reversNum = newNum.join('')
return +reversNum;
}
