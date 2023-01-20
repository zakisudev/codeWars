function sumTwoSmallestNumbers(numbers) {
  let sum = 0;
  let small = numbers[0];
  let small1 = 0;
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < small ){
      small = numbers[i];
    } else if (numbers[i] > numbers[i+1]) { 
    small1 = numbers[i+1];
    sum = small + small1;
    }
  }
    return sum;
}
console.log(sumTwoSmallestNumbers([19, 8, 42, 2, 89]))