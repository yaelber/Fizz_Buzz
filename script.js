 //Write a short program that prints (using console.log) that:

//For a multiple of 3, print "Fizz" instead of the number. 

//For a multiple of 5, print "Buzz" instead of the number. 

//or a number that is a multiple of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(number) {
  if (number % 15 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
}