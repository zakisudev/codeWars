function areAnagrams(str1, str2) {
  const cleanStr1 = str1
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .sort()
    .join('');
  const cleanStr2 = str2
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .sort()
    .join('');
  return cleanStr1 === cleanStr2;
}
