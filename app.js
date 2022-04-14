//-------------- Part 1 --------------------------------------------------
const arrToSort = [
  { name: "jonathan", age: 20 },
  { name: "alice", age: 24 },
];
const sortFun = (arr, category = "name", order = "asc") => {
  if (arr.length) {
    if (category === "name" && order === "asc") {
      return arr.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (category === "name" && order === "dsc") {
      return arr.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    if (category === "age" && order === "asc") {
      return arr.sort((a, b) => a.age - b.age);
    } else if (category === "age" && order === "dsc") {
      return arr.sort((a, b) => b.age - a.age);
    }
  }
  return [];
};
console.log("sorting", sortFun([], "name", "asc"));
console.log("sorting", sortFun(arrToSort, "name", "asc"));

//-------------- Part 2 --------------------------------------------------

const arrReduce = ["a", "b", "c", "d"];

// const mapWithReduce = (arr, multiplyBy) => {
//   if (Array.isArray(arr)) {
//     return arr.reduce((accum, current) => {
//       accum.push(current.repeat(multiplyBy));
//       return accum;
//     }, []);
//   } else {
//     return "error";
//   }
// };
// console.log("map", mapWithReduce(arrReduce, 4));

Array.prototype.reduceMap = function (func) {
  if (Array.isArray(this)) {
    return this.reduce((acc, ...arg) => {
      acc.push(func(arg[0]));
      return acc;
    }, []);
  }
  return [];
};
console.log(
  "new map",
  arrReduce.reduceMap((elem) => elem.repeat(3))
);

// const filterWithReduce = (arr, criterion = "consonant") => {
//   if (Array.isArray(arr)) {
//     return arr.reduce((accum, current) => {
//       if (
//         !!current.match(/[bcdfghjklmnpqrstvwxys]/) &&
//         criterion === "consonant"
//       ) {
//         accum.push(current);
//       } else if (!!current.match(/[aeuio]/) && criterion === "vowel") {
//         accum.push(current);
//       }
//       return accum;
//     }, []);
//   }
//   return "error";
// };
// console.log("filter", filterWithReduce(arrReduce, "consonant"));

Array.prototype.reduceFilter = function (func) {
  if (Array.isArray(this)) {
    return this.reduce((acc, args) => {
      let current = func(args);
      if (current !== undefined) {
        acc.push(current);
      }
      return acc;
    }, []);
  }
  return [];
};
console.log(
  "new filter",
  ["a", "b", "c", "e", "m"].reduceFilter((elem) => {
    if (!!elem.match(/[bcdfghjklmnpqrstvwxys]/)) {
      return elem;
    }
  })
);

// const everyWithReduce = (arr, criterion = "number") => {
//   if (Array.isArray(arr)) {
//     const arrToCompair = arr.reduce((accum, current) => {
//       if (isNaN(current) && criterion === "number") {
//         accum.push(current);
//       } else if (current === +current && current === "string") {
//         accum.push(current);
//       }
//       return accum;
//     }, []);
//     return arrToCompair.length === arr.length;
//   } else {
//     return "error";
//   }
// };
// console.log("every", everyWithReduce(arrReduce));
// console.log("every", everyWithReduce([1, "a", "b"], "string"));

Array.prototype.reduceEvery = function (func) {
  if (Array.isArray(this)) {
    const arrToCompair = this.reduce((acc, args) => {
      let current = func(args);
      if (current !== undefined) {
        acc.push(func(args));
      }
      return acc;
    }, []);
    console.log(arrToCompair, this);
    return arrToCompair.length === this.length;
  }
  return "error";
};
console.log(
  "new every",
  [1, "a", "b", "c"].reduceEvery((elem) => {
    if (isNaN(elem)) {
      return elem;
    }
  })
);

// const someWithReduce = (arr, elemToFind) => {
//   if (Array.isArray(arr)) {
//     return arr.reduce((accum, current) => {
//       if (current === elemToFind) {
//         return (accum = true);
//       }
//       return accum;
//     }, 0);
//   } else {
//     return "error";
//   }
// };
// console.log("some", someWithReduce([-1, -2, 0, 3, 2], 2));

Array.prototype.reduceSome = function (func) {
  if (Array.isArray(this)) {
    return !!this.reduce((acc, args) => {
      const current = func(args);
      if (current !== undefined) {
        acc.push(current);
      }
      return acc;
    }, []);
  }
  return "error";
};
console.log(
  "new some",
  [-1, 2, 0, -2].reduceSome((elem) => {
    if (elem > 0) {
      return elem;
    }
  })
);

// const findWithReduce = (arr, criterion = "lower") => {
//   if (Array.isArray(arr)) {
//     let res;
//     arr.reduce((accum, current) => {
//       if (current < 0 && criterion === "lower") {
//         accum.push(current);
//       } else if (current > 0 && criterion === "higher") {
//         accum.push(current);
//       } else if (current === 0 && criterion === "equal") {
//         accum.push(current);
//       }
//       return (res = accum);
//     }, []);
//     return res[0];
//   } else {
//     return "error";
//   }
// };
// console.log("find", findWithReduce([-1, -2, 0, 3, 2], "lower"));

Array.prototype.reduceFind = function (func) {
  if (Array.isArray(this)) {
    return this.reduce((acc, args) => {
      const current = func(args);
      if (current !== undefined) {
        acc.push(current);
      }
      return acc;
    }, [])[0];
  }
  return "error";
};
console.log(
  "new find",
  [1, -1, 2, 1, 0, -2].reduceFind((elem) => {
    if (elem < 0) {
      return elem;
    }
  })
);

// const indexOfWithReduce = (arr, elemToFind) => {
//   if (Array.isArray(arr)) {
//     let res;
//     arr.reduce((accum, current, index) => {
//       if (current === elemToFind) {
//         accum.push(index);
//       }
//       return (res = accum);
//     }, []);
//     return res[0];
//   } else {
//     return "error";
//   }
// };
// console.log("index", indexOfWithReduce(["a", "c", "b", "c"], "c"));

Array.prototype.reduceFindIndex = function (func) {
  if (Array.isArray(this)) {
    return this.reduce((acc, args, index) => {
      const current = func(args);
      if (current !== undefined) {
        return index;
      }
      return acc;
    }, 0);
  }
  return "error";
};
console.log(
  "new findIndex",
  [1, -1, 2, 1, 0, -2].reduceFindIndex((elem) => {
    if (elem === 2) {
      return elem;
    }
  })
);


//-------------- Part 3 --------------------------------------------------



const copyFoo = (obj) => {
  if (typeof obj === "object") {
    return (Object = { ...obj });
  } else {
    return "error";
  }
};

console.log("copy", copyFoo({ a: 11, b: 22 }));

//-------------- Part 4 --------------------------------------------------


const arrEvenOdd = [4, 5, 3, 6, 7, 1, 2, 9, 8];

const sortArrEvenOdd = (arr, orderEven, orderOdd) => {
  let even = [];
  let odd = [];
  if (Array.isArray(arr)) {
    if (orderEven === "asc") {
      even = arr.filter((elem) => elem % 2 === 0).sort((a, b) => a - b);
    } else if (orderEven === "dsc") {
      even = arr.filter((elem) => elem % 2 === 0).sort((a, b) => b - a);
    } else {
      return "worng order";
    }
    if (orderOdd === "asc") {
      odd = arr.filter((elem) => elem % 2 !== 0).sort((a, b) => a - b);
    } else if (orderOdd === "dsc") {
      odd = arr.filter((elem) => elem % 2 !== 0).sort((a, b) => b - a);
    } else {
      return "worng order";
    }
    const res = [...even, ...odd];
    return res;
  } else {
    return "not array";
  }
};

console.log("even odd array sort", sortArrEvenOdd(arrEvenOdd, "asc", "dsc"));
