const style = function(text, code) {
  return "\033[" + code + "m" + text + "\033[0m";
};

const greenFg = function(text) {
  return style(text, "32");
};

const redFg = function(text) {
  return style(text, "31");
};

const yellowFg = function(text) {
  return style(text, "1;33");
};

exports.style = style;
exports.greenFg = greenFg;
exports.redFg = redFg;
exports.yellowFg = yellowFg;
