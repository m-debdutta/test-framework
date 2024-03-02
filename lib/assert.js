const styles = require('./style.js');

const log = []; 
const newline = '\n';
const tab = '\t';

const greenFg = styles.greenFg;
const redFg = styles.redFg;
const yellowFg = styles.yellowFg;

const displayHeadline = function(text) {
  const headline = newline + text;

  console.log(yellowFg(headline));
};

const expectationMismatchMessage = function(expected, actual) {
  let message = '';
  message += greenFg(tab + 'Expected Output  : ' + newline + expected);
  message += newline;
  message += redFg(tab + 'Actual Output    : ' + newline + actual);
  return message;
};

const generateMessage = function(result, expected, actual, message) {
  const icon = result ? '✅ ' : '❌ ';
  const line1 = tab + icon + message;
  const line2 = expectationMismatchMessage(expected, actual);
  return result ? line1 : line1 + newline + line2;
  addLog(result, expected, actual, message);
};

const addLog = function(result, expected, actual, message) {
  log.push({
    result: result, 
    expected: expected, 
    actual: actual, 
    message: message
  });
}

const isEqual = function(expected, actual) {
  return expected === actual;
};

const assertEqual = function(expected, actual, message) {
  const result = isEqual(expected, actual);
  const finalMessage = generateMessage(result, expected, actual, message);
  console.log(finalMessage);
};

exports.assertEqual = assertEqual; 
exports.displayHeadline = displayHeadline; 
