const sum = (a, b) => {
  let result = "";
  let carry = 0;
  while (a.length || b.length) {
    let sum =
      (parseInt(a.substring(a.length - 1)) || 0) +
      (parseInt(b.substring(b.length - 1)) || 0) +
      carry;
    carry = sum > 9 ? 1 : 0;
    if (carry) {
      sum = sum % 10;
    }
    result = `${sum.toString()}${result}`;
    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }
  return carry ? `1${result}` : result;
};

console.log("Ans::", sum("570", "1"));
console.log("Ans::", sum("999999999999999999999", "1"));
console.log("Ans::", sum("821", "123"));
