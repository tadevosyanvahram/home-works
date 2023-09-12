// Write a recursive function to flatten a nested object.

function flattenObject(obj, parentKey = '') {
    const result = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
  
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          Object.assign(result, flattenObject(obj[key], newKey));
        } else {
          result[newKey] = obj[key];
        }
      }
    }
  
    return result;
  }

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};
const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject); 