function balancingParentheses(string) {
  // type your code here
  return _balancingParens(string.split(""), [])
}

function _balancingParens(chars, stack) {
  if (chars.length === 0) {
    return stack.length
  }

  let paren = chars.shift();
  if (paren === ")" && stack[stack.length - 1] == "(") {
    stack.pop();
  } else {
    stack.push(paren);
  }

  return _balancingParens(chars, stack);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
