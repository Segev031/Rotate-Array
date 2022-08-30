function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        const last = nums[nums.length - 1];
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j-1];
        }
        nums[0] = last;
    }
};