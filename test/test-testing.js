const assert = require('../lib/assert.js'); 
const test = require('../src/testing.js'); 

const isEqual = assert.assertEqual; 
const displayHeadline = assert.displayHeadline; 
const areEqual = test.areEqual; 

const it = function(message, assertReport) {
  isEqual(assertReport.expected, assertReport.actual, message); 
}

const testNestedArray = function() {
  displayHeadline('testing nested array : '); 
  it('should give true for empty array', {
    expected: true, 
    actual: areEqual([], [])
  }); 

  it('should give true for empty 2D array', {
    expected: true, 
    actual: areEqual([[]], [[]])
  }); 

  it('should give false for non-similar array', {
    expected: false, 
    actual: areEqual([1, 2], [1])
  }); 

  it('should give true for an identical array of array', {
    expected: true, 
    actual: areEqual([[1]], [[1]])
  }); 

  it('should give false for different data types', {
    expected: false,  
    actual: areEqual([], 1)
  }); 

  it('should give true for equal 1D array', {
    expected: true,  
    actual: areEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
  }); 

  it('should give false for unequal 1D array', {
    expected: false,  
    actual: areEqual([1, 2, 3, 4, 6], [1, 2, 3, 4, 5])
  }); 
}; 

const testNestedObject = function() {
  displayHeadline('testing nested object : ');
  it('should give true for equal empty object', {
    expected: true, 
    actual: areEqual({}, {})
  }); 

  it('should give true for equal object of empty object', {
    expected: true, 
    actual: areEqual({a: {}}, {a: {}})
  }); 

  it('should give true for equal non-empty objects', {
    expected: true, 
    actual: areEqual({a: 1, b: 2}, {a: 1, b: 2})
  }); 

  it('should give false for unequal non-empty object', {
    expected: false, 
    actual: areEqual({a: 1, b: 2}, {a: 1, b: 1})
  }); 
}; 

const testStrings = function() {
  displayHeadline('testing strings :  '); 
  it('should give true for empty strings', {
    expected: true, 
    actual: areEqual('', '') 
  }); 

}; 

const testNumbers = function() {
  displayHeadline('testing numbers :  ')
  it('zero and zero should be equal', {
    expected: true, 
    actual: areEqual(0, 0)
  }); 
}; 

const testMixediDataType = function() {
  displayHeadline('testing mixed data type :  '); 
  it('should give true for similar array of objects', {
    expected: true, 
    actual: areEqual([{a: 1}, {b: 2}], [{a: 1}, {b: 2}])
  }); 

  it('should give true for similar object of arrays', {
    expected: true, 
    actual: areEqual({a: [1, 2, 3, 4]}, {a: [1, 2, 3, 4]})
  }); 

  it('should give false for different array of objects', {
    expected: false, 
    actual: areEqual([{a: 1}, {b: 3}], [{a: 1}, {b: 2}])
  }); 

  it('should give false for different object of arrays', {
    expected: false, 
    actual: areEqual({a: [1, 2, 3, 5]}, {a: [1, 2, 3, 4]})
  }); 
}; 

testNestedArray(); 
testNestedObject(); 
testStrings(); 
testNumbers(); 
testMixediDataType(); 
