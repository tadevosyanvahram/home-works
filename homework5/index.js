const arr = [1, 2, 3];
//arr-- > Array.prototype-- > Object.prototype-- > null;

const human = {
  isHuman: true,
};
//human-- > Object.prototype-- > null;

const str = "";
//str-- > String.prototype-- > Object.prototype-- > null;

const user = {
  name: "John",
  __proto__: human,
};
//user --> human --> Object.prototype --> null

const car = {
  hasEngine: true,
};
//car --> Object.prototype --> null

const mercedes = {
  name: "mercedes",
  __proto__: car,
};
//mercedes --> car --> Object.prototype --> null

const bmw = Object.create(null);
//bmw --> null

const emptyObj = {};
//emptyObj-- > Object.prototype-- > null

function fn() {
  console.log("hello, world!");
}
//fn --> Function.prototype --> Object.prototype --> null

const emptyWithoutProto = Object.create(null);
//emptyWithoutProto --> null

const num = 12;
//num --> (no prototype)

const isAuth = false;
//isAuth --> (no prototype)
