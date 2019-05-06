const flattenArray = (arr) => {
  let flat = [].concat(...arr);
  // here I would call flattanArray function recursively
  // other words calling itself if some-method returns true
  return flat.some(Array.isArray) ? flattenArray(flat) : flat;
}

console.log(flattenArray([1, [2], [3, [[4]]]]))
