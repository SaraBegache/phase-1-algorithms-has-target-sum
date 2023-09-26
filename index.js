function hasTargetSum(array, target) {
  // Write your algorithm here
  const numMap = {};

  for (const num of array) {
    const diff = target - num;
    if (numMap[diff]) {
      return true;
    }
    numMap[num] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of the hasTargetSum function is O(n), where "n" 
  represents the number of elements in the input array. This is because
   the function iterates through the array once, and the operations performed within the loop, such as object insertions and lookups, 
   are constant time on average. As a result, the time taken by the function scales linearly with the size of the input array.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(nums, target):
    Create an empty object numMap
    
    For each num in nums:
        Calculate the difference diff = target - num
        If numMap contains key diff:
            Return true (valid pair found)
        Else:
            Add num as a key to numMap with value true
        
    Return false (no valid pair found)
*/

/*
  Add written explanation of your solution here
    Create an empty object to store the integers as keys.
Loop through the array of integers.
Calculate the difference between the target and the current integer.
Check if the difference exists in the object.
If yes, return true.
If not, add the current integer to the object.
If the loop completes without finding a valid pair, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
module.exports = hasTargetSum;