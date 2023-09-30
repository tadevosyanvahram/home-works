const obj = {
  nameParts: [],
  get name() {
      return this.nameParts.map((val) => [val, val.length]
      );
  },
  set name(val) {
    if (typeof val === "string") {
      this.nameParts = val.split(",").map((val) => val.trim());
    }
  },
};

obj.name = "Hamlet, Artavazd";
console.log(obj.name); // [['Hamlet', 6], ['Artavazd', 8]]
