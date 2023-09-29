/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const length = nums.length;
   for (let index = 0; index < length; index++) {
      const num = nums[index];
      const rest = target - num;
      for (let index2 = index + 1; index2 < length; index2++){
         if(nums[index2] === rest){
            return [index, index2];
         }
      }
   }
};