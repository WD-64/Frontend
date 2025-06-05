const array = [2, 4, 6, 8, 10, 12, 14, 16];

const slicedArray1 = array.slice(1, 4); // From index 1 to 3
console.log('Sliced portion (index 1 to 3):', slicedArray1);

const slicedArray2 = array.slice(3); // From index 3 to the end
console.log('Sliced portion (from index 3 to end):', slicedArray2);

const slicedArray3 = array.slice(-4); // The last 4 elements
console.log('Sliced portion (last 4 elements):', slicedArray3);

console.log('Original array after slicing:', array);
