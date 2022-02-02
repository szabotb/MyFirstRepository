function clear(arr) {
    let newArr = [];
    if (typeof arr === "undefined") {
      return 0;
    }
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        newArr.push(arr[i]);
      }
      if (typeof arr[i] === "string" && arr[i].length > 0) {
        arr[i] = arr[i].toUpperCase();
        newArr.push(arr[i]);
      }
    }
    return newArr.reverse();
  }
  console.log(clear(["banana", "", 5, true, "", 7]));