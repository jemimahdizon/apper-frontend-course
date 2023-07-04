function transform(nums) {
  const squared = nums.map(num => num * num);
  const sortedSquared = squared.sort((a, b) => a - b);
  return sortedSquared;
}

const nums = [4, 9, 5, 3, 8];
const sortedSquaredNums = transform(nums);
console.log(sortedSquaredNums); // [9, 16, 25, 64, 81]
