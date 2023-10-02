/**
 * Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
   function isPanlindromic(str){
     return str === str.split("").reverse().join("");
   }
   var len = s.length;
   while (len > 0) {
      for(var i=0; i+len<=s.length; i++){
         var str = s.slice(i, i+len);
         if(isPanlindromic(str)){
            return str;
         }
      }
      len--;
   }
}