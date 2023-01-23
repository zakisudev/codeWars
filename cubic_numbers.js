function sumCubes(n){
  let result=0;
  for (i=0; i<=n; i++){
    result += Math.pow(i,3);
  }
  return result;
}