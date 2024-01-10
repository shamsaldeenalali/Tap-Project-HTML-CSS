function findTwoNumbers(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndices[complement] !== undefined) {
            return [numIndices[complement], i];
        }

        numIndices[nums[i]] = i;
    }

    return [];
}

const numbers = [2, 7, 11, 15];
const targetSum = 9;
const resultIndices = findTwoNumbers(numbers, targetSum);

if (resultIndices.length === 2) {
    console.log(`Indices of two numbers that add up to ${targetSum}: [${resultIndices[0]}, ${resultIndices[1]}]`);
} else {
    console.log("No solution found.");
}
