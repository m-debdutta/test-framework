const areArraysEqual = function(array1, array2) {
  if(array1.length !== array2.length) {
    return false; 
  }

  return array1.every(function(element, index) {
    return areEqual(element, array2[index]); 
  }); 
}; 

const areObjectsEqual = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false; 
  }

  return Object.keys(object1).every(function(key) { 
    return areEqual(object1[key], object2[key]); 
  }); 
}

const isObject = function(probableObject) {
  return typeof(probableObject) === 'object' && !Array.isArray(probableObject); 
}

const areEqual = function(value1, value2) {
  if(value2 === value1) {
    return true; 
  } 

  if(Array.isArray(value1) && Array.isArray(value2)) {
    return areArraysEqual(value1, value2); 
  }

  if(isObject(value1) && isObject(value2)) {
    return areObjectsEqual(value1, value2); 
  }

  return false; 
}; 

exports.areEqual = areEqual; 
