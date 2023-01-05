function flattenArray(arr) {
  return arr.reduce(
    (flat, current) =>
      flat.concat(Array.isArray(current) ? flattenArray(current) : current),
    []
  );
}
