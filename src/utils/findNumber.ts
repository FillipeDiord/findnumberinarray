export function findNumber(nums: number[], target: number) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      low = mid + 1;
    }

    if (nums[mid] > target) {
      high = mid - 1;
    }
  }

  return -1;
}
