Array.prototype.myMap = function (callback) {
    const newArray = [];
    const length = this.length;
  
    for (let i = 0; i < length; i++) {
      let value = callback(this[i], i);
      newArray.push(value);
    }
    return newArray;
  };
  
  const arr = [1, 2, 3, 4];
  console.log(arr.myMap(function (val) { return val + 2 }
  ));
  