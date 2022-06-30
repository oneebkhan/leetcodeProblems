// 462. Minimum Moves to Equal Array Elements II
// Medium

// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment or decrement an element of the array by 1.

// Test cases are designed so that the answer will fit in a 32-bit integer.

// Example 1:
// Input: nums = [1,2,3]
// Output: 2
// Explanation:
// Only two moves are needed (remember each move increments or decrements one element):
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]

// Example 2:
// Input: nums = [1,10,2,9]
// Output: 16


function minMoves2(nums: number[]): number {
    let steps: number = 0
    let closestNumber: number = 0
    const sum: number = nums.reduce((a, b) => {return a + b}, 0)
    const sortedNums = nums.sort((a, b) => {return a - b})
    const avg: number = Math.round(sum/nums.length)
    const prevNum: number = nums[Math.floor(nums.length/2)]
    const nextNum: number = nums[Math.ceil(nums.length/2)]
    if (avg - prevNum <= nextNum + avg) {
        closestNumber = prevNum
    } else {
        closestNumber = nextNum
    }
    nums.forEach(n => {
        if (n < closestNumber) {
            steps = steps + (closestNumber - n)
        }
        if (n > closestNumber) {
            steps = steps + (n - closestNumber)
        }
    })
    return steps
};