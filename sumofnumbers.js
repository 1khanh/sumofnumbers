const numbers = [1, 2, 3, 4, 5];

function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

console.log(sumFor(numbers));

function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(numbers));

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1, data.length));
}

console.log(sumRecursion(numbers));

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numbers));