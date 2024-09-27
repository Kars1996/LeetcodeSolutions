function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}


// Optimal Code
function twoSumOptimal(nums: number[], target: number): number[] {
    const m = new Map();
    for (let i = 0; i < nums.length; ++i) {
      let comp = target - nums[i];
      if (m.has(comp)) {
        return [m.get(comp), i];
      }
      m.set(nums[i], i);
    }
    return [];
  }