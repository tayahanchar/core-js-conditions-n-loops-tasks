/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = a > b ? a : b;
  result = result > c ? result : c;
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (
    (a === b && a + b > c) ||
    (a === c && a + c > b) ||
    (b === c && b + c > a)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const nums = [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
  ];

  let result = '';

  for (let index = 0; index < nums.length; index += 1) {
    const [first, second] = nums[index];
    if (+first === num) {
      result = second;
      return result;
    }
  }

  if (num < 40) {
    const [first, second] = `${num}`;

    for (let index = 1; index <= +first; index += 1) {
      result += nums[9][1];
    }
    result += nums[+second - 1][1];
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    if (i !== 0) {
      result += ' ';
    }

    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      case ',':
      case '.':
        result += 'point';
        break;
      default:
        result += '';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = '';
  for (let index = str.length - 1; index >= 0; index -= 1) {
    result += str[index];
  }
  return str === result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;
  for (let index = 0; index < str.length; index += 1) {
    if (letter === str[index]) {
      result = index;
      break;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const string = `${num}`;
  let result = false;
  for (let index = 0; index < string.length; index += 1) {
    if (digit === +string[index]) {
      result = true;
      break;
    }
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let result = -1;
  if (arr.length <= 2) {
    return result;
  }

  for (let index = 1; index < arr.length - 1; index += 1) {
    let leftSide = 0;
    let rightSide = 0;

    for (let k = 0; k < index; k += 1) {
      leftSide += arr[k];
    }

    for (let l = index + 1; l < arr.length; l += 1) {
      rightSide += arr[l];
    }

    if (rightSide === leftSide) {
      result = index;
      break;
    }
  }

  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let num = 1;
  let startCol = 0;
  let endCol = size - 1;
  let startRow = 0;
  let endRow = size - 1;

  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let k = 0; k < size; k += 1) {
      matrix[i][k] = null;
    }
  }

  while (startCol <= endCol) {
    for (let index = startRow; index <= endRow; index += 1) {
      matrix[startRow][index] = num;
      num += 1;
    }

    startCol += 1;

    for (let k = startCol; k <= endCol; k += 1) {
      matrix[k][endCol] = num;
      num += 1;
    }

    endRow -= 1;

    for (let l = endRow; l >= startRow; l -= 1) {
      matrix[endCol][l] = num;
      num += 1;
    }

    endCol -= 1;

    for (let j = endCol; j >= startCol; j -= 1) {
      matrix[j][startRow] = num;
      num += 1;
    }

    startRow += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  let index = matrix.length;
  const arrayCopy = JSON.parse(JSON.stringify(matrix));
  const myMatrix = matrix;

  for (let i = 0; i < arrayCopy.length; i += 1) {
    index -= 1;
    for (let k = 0; k < arrayCopy[i].length; k += 1) {
      myMatrix[k][index] = arrayCopy[i][k];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const initArr = [...arr];
  let count = 0;
  const result = arr;
  let index = 0;

  while (initArr.length !== count) {
    const min = Math.min(...initArr);

    for (let i = 0; i < initArr.length; i += 1) {
      if (min === initArr[i]) {
        initArr[i] = Infinity;
        count += 1;
        result[index] = min;
        index += 1;
      }
    }
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let copyString = str;
  let start = '';
  let finish = '';

  const cache = {};

  for (let i = 0; i < iterations; i += 1) {
    if (cache[copyString]) {
      copyString = cache[copyString];
    } else {
      for (let l = 1; l < str.length; l += 2) {
        finish += copyString[l];
        start += copyString[l - 1];
      }

      cache[copyString] = start + finish;
      copyString = start + finish;
      start = '';
      finish = '';
    }
  }

  return copyString;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let result = [];
  const arrFromNumber = String(number);

  for (let i = 0; i < arrFromNumber.length; i += 1) {
    for (let l = 0; l < arrFromNumber.length; l += 1) {
      const newstr = [...arrFromNumber];
      const mainnum = newstr[i];
      newstr[i] = newstr[l];
      newstr[l] = mainnum;
      let resstr = '';
      for (let k = 0; k < newstr.length; k += 1) {
        resstr += newstr[k];
      }
      if (+resstr > number) result.push(+resstr);
    }
  }

  const newNum = `${Math.min(...result)}`;
  result = [];

  for (let i = 0; i < newNum.length; i += 1) {
    for (let l = 0; l < newNum.length; l += 1) {
      const newstr = [...newNum];
      const mainnum = newstr[i];
      newstr[i] = newstr[l];
      newstr[l] = mainnum;
      newstr[l] = mainnum;
      let resstr = '';
      for (let k = 0; k < newstr.length; k += 1) {
        resstr += newstr[k];
      }
      if (+resstr > number) result.push(+resstr);
    }
  }

  const newNum2 = `${Math.min(...result)}`;
  result = [];

  for (let i = 0; i < newNum2.length; i += 1) {
    for (let l = 0; l < newNum2.length; l += 1) {
      const newstr = [...newNum2];
      const mainnum = newstr[i];
      newstr[i] = newstr[l];
      newstr[l] = mainnum;
      newstr[l] = mainnum;
      let resstr = '';
      for (let k = 0; k < newstr.length; k += 1) {
        resstr += newstr[k];
      }
      if (+resstr > number) result.push(+resstr);
    }
  }

  return Math.min(...result);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
