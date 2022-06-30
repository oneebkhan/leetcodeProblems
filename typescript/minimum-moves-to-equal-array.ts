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