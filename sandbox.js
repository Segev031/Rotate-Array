function rotate(nums, k) {
    for (var i = 0; i < k; i++) {
        var last = nums[nums.length - 1];
        for (var j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = last;
    }
}
