require 'pry'

def balancing_parentheses(string)
  # type your code in here
  return _balancing_parentheses(string.chars, [])
end

def _balancing_parentheses(chars, stack)
  if chars.length == 0
    return stack.size
  else
    paren = chars.shift
    if paren == ")" && stack.last == "("
      stack.pop
    else
      stack.push paren
    end
    return _balancing_parentheses(chars, stack)
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
