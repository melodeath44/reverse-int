
module.exports = function reverse (n) {
    if(n > 0){
        const num = n.toString();
        const num1 = num.split("");
        const newNum = num1.reverse();
        const reversNum = newNum.join('')
        return reversNum;
    }


  else if (n < 0){
    const numMinus = -1 * n;
    const numMinus2 = numMinus.toString();
    const numMinus3 = numMinus2.split("");
    const newNum1 = numMinus3.reverse();
    const reversNum1 = newNum1.join('')
    return reversNum1;
  }
  }
