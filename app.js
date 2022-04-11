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
};
console.log("sorting", sortFun(arrToSort, "name", "asc"));

const arrReduce = ["a", "b", "c", "d"];

const mapWithReduce = (arr) => {
  if (Array.isArray(arr)) {
    return arr.reduce((accum, current) => {
      accum.push(current + current);
      return accum;
    }, []);
  } else {
    return "error";
  }
};

console.log("map", mapWithReduce(arrReduce));

const filterWithReduce = (arr) => {
  if (Array.isArray(arr)) {
    return arr.reduce((accum, current) => {
      if (!!current.match(/[bcdfghjklmnpqrstvwxys]/)) {
        accum.push(current);
      }
      return accum;
    }, []);
  } else {
    return "error";
  }
};

console.log("filter", filterWithReduce(arrReduce));

const everyWithReduce = (arr) => {
  if (Array.isArray(arr)) {
    const arrToCompair = arr.reduce((accum, current) => {
      if (isNaN(current)) {
        accum.push(current);
      }
      return accum;
    }, []);
    return arrToCompair.length === arr.length;
  } else {
    return "error";
  }
};

console.log("every", everyWithReduce(arrReduce));
console.log("every", everyWithReduce([1, "a", "b"]));

const someWithReduce = (arr, elemToFind) => {
  if (Array.isArray(arr)) {
    return arr.reduce((accum, current) => {
      if (current === elemToFind) {
        return (accum = true);
      }
      return accum;
    }, 0);
  } else {
    return "error";
  }
};

console.log("some", someWithReduce([-1, -2, 0, 3, 2], 2));

const findWithReduce = (arr) => {
  if (Array.isArray(arr)) {
    let res;
    arr.reduce((accum, current) => {
      if (current > 0) {
        accum.push(current);
      }
      return (res = accum);
    }, []);
    return res[0];
  } else {
    return "error";
  }
};

console.log("find", findWithReduce([-1, -2, 0, 3, 2]));

const indexOfWithReduce = (arr, elemToFind) => {
  if (Array.isArray(arr)) {
    let res;
    arr.reduce((accum, current, index) => {
      if (current === elemToFind) {
        accum.push(index);
      }
      return (res = accum);
    }, []);
    return res[0];
  } else {
    return "error";
  }
};

console.log("index", indexOfWithReduce(["a", "c", "b", "c"], "c"));

const copyFoo = (obj) => {
  if (typeof obj === "object") {
    return (Object = { ...obj });
  } else {
    return "error";
  }
};

console.log("copy", copyFoo({ a: 11, b: 22 }));

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
