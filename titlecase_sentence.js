function titleCase(sentence) {
  return sentence
    .toLowerCase()
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}
