/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
   let sub = s[0];
   if(s.length === 0){
       return 0;
   }
   let longest = sub
   let j = 0;
   for (let i = j+1; i < s.length; i++) {
       if(s.slice(j,i).split("").includes(s[i])){
           ++j;
           i=j;
       }else{
           sub=s.slice(j,i+1)
       }

       if(sub.length>longest.length){
           longest = sub;
       }

   }
   return longest.length;
};