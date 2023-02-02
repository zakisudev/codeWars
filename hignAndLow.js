function highAndLow(numbers) {
  let n=numbers[0];
  let low;
  let high;
  for (i=1; i<numbers.length; i++) {
    if (numbers[i]>n) {
      low = n;
      high = numbers[i];
    } else if (numbers[i]<0) {
      high = numbers[i+1];
      low = numbers[i];
    }
  }
  return high+" "+low;
}