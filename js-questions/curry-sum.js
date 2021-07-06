/* 
  Curry sum
  const sum = (a, b) => {
    return a+b;
  };

  const curriedSum = curriedSum(add);
  curriedSum(2)(5) // 7
  curriedSum(2, 7)(5) // 8
*/

const sum = (a, b) => {
  return a+b;
};

const curriedSum = (func) => {
  return recursiveCurried = (...params) => {
    if (params.length === func.length) {
      return func.apply(this, params);
    } else {
      return (...extraParams) => {
        params = params.concat(extraParams);
        return recursiveCurried.apply(this, params);
      }
    } 
  }
} 

const curriedSumInstance = curriedSum(sum);
console.log(curriedSumInstance(2)(3));
console.log(curriedSumInstance(2, 3));