// //masala 1

// Map.prototype.deleteMany = function (...keys) {
//     for (const key of keys) {
//       this.delete(key);
//     }
//     return this;
//   };
  
//   let obj = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
//     ['d', 4]
//   ]);
  
//   obj.deleteMany('a', 'c');
  

// // masala 2

// function mapSum(obj) {
//     let sum = 0;
  
//     for (const value of obj.values()) {
//       sum += value;
//     }
  
//     return sum;
//   }
  
//   let obj  = new Map([['a', 2], ['b', 5], ['c', 3]]);
//   let result = mapSum(obj);


// // masala 3

// function getMapIntersection(map1, map2) {
//     const intersection = new Map();
  

//     for (const [key, value] of map1) {
//       if (!map2.has(key)) {
//         intersection.set(key, value);
//       }
//     }
  
//     for (const [key, value] of map2) {
//       if (!map1.has(key)) {
//         intersection.set(key, value);
//       }
//     }
  
//     return intersection;
//   }
  
//   let map1 = new Map([['apple', 1], ['banana', 2], ['orange', 3]]);
//   let map2 = new Map([['apple', 4], ['orange', 5], ['grape', 6]]);
//   let result = getMapIntersection(map1, map2);

  

// masala 4

// let obj = new WeakMap([
//     [{id: 1}, 'John'],
//     [{id: 2}, 'Jane'],
//     [{id: 3}, 'Alice']
//   ]);
  
//   function getWeakMapSize(weakMap) {
//     let count = 0;
//     for (const _ of weakMap) {
//       count++;
//     }
//     return count;
//   }
  
//   let size = getWeakMapSize(obj);
  

// masala 5

// function setUnion(set1, set2) {
//     const union = new Set(set1);
  
//     for (const item of set2) {
//       union.add(item);
//     }
  
//     return union;
//   }
  
//   let set1 = new Set([1, 2, 3]);
//   let set2 = new Set([2, 3, 4]);
//   let result = setUnion(set1, set2);

  

// masala 6

// function setIntersection(set1, set2) {
//     const intersection = new Set();
  
//     for (const item of set1) {
//       if (set2.has(item)) {
//         intersection.add(item);
//       }
//     }
  
//     return intersection;
//   }
  
//   let set1 = new Set([1, 2, 3]);
//   let set2 = new Set([2, 3, 4]);
//   let result = setIntersection(set1, set2);
  
  

// masala 7

// function checkSetSubset(set1, set2) {
//     for (const item of set1) {
//       if (!set2.has(item)) {
//         return false; 
//     }
//     return true; 
//   }
  
//   let set1 = new Set([1, 2]);
//   let set2 = new Set([1, 2, 3, 4]);
//   let result = checkSetSubset(set1, set2);


// masala 8

// function removeDuplicates(arr) {
//     return Array.from(new Set(arr));
//   }
  
//   let arr = [1, 2, 2, 3, 4, 4, 5];
//   let result = removeDuplicates(arr);
  
  

// masala 9

// function mergeArr(arr1, arr2) {
//     return arr1.concat(arr2);
//   }
  
//   let arr1 = [1, 5, 8];
//   let arr2 = [7, 9, 10];
//   let result = mergeArr(arr1, arr2);

  

// masala 10
  
// function concatArrays(...arrays) {
//     return [].concat(...arrays);
//   }
  
//   let result = concatArrays([1, 2], [3, 4], [5, 6]);

  