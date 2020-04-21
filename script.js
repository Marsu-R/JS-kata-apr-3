// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// Example
//   deleteNth ([1,1,1,1],2) // return [1,1]

//   deleteNth ([20,37,20,21],1) // return [20,37,21]

function deleteNth(arr, n) {
  let result = [];
  let counts = {};
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] <= n) {
      result.push(num);
    }
  });
  return result;
}

// -------------------------------------------
// Simple Simple Simple String Expansion - 6kyu
// https://www.codewars.com/kata/5ae326342f8cbc72220000d2/train/javascript

// Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

// The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.

// stringExpansion('3D2a5d2f') === 'DDDaadddddff'
// stringExpansion('3abc') === 'aaabbbccc'      // correct
// stringExpansion('3abc') !== 'aaabc'          // wrong
// stringExpansion('3abc') !== 'abcabcabc'      // wrong
// If there are two consecutive numeric characters the first one is ignored.

// stringExpansion('3d332f2a') === 'dddffaa'
// If there are two consecutive alphabetic characters then the first character has no effect on the one after it.

// stringExpansion('abcde') === 'abcde'
// Your code should be able to work for both lower and capital case letters.

// stringExpansion('') === ''
