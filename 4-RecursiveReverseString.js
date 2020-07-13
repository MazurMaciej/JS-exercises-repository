/*
Recursive Reverse String

Implement a function reverseString(string) which accepts a string parameter, reverses it and returns it.

Do not use .reverse() or any other standard JavaScript string functions or sorting functions. Do not use loops or iteration. Use the following ideas to implement the function recursively:
- if the string is empty, its reverse is the empty string;
- if the string has one character, return it;
- otherwise, the result is a concatenation of the string parameter without the first letter, in reverse, and the first letter at the end;

Example outputs:
reverseString( “abcb” ) === “bcba”
reverseString( “test” ) === “tset”
reverseString( “racecar” ) === “racecar”
*/

const reverseString = (string) => {
    const reverse = (s, acc) => (s.length == 0) ? acc : reverse(s.substr(1), s.charAt(0) + acc);
    return (reverse(string, ''));
};

reverseString('abcb')
reverseString('test')
reverseString('racecar')