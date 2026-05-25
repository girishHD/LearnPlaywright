let arr = [1, 2, 3];

arr.push(4, 5, 6);
console.log(arr);

// splice (start, deleteCount, ....itemsToAdd)
arr.splice(2, 1);  // index, item count 
console.log(arr);

arr.splice(2, 0, 99);  // add the number 0 => delete count
console.log(arr);

arr.splice(2, 1, 44); // repalce the number
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);