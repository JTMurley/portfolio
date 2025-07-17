/*
 * @lc app=leetcode id=1 lang=csharp
 *
 * [1] Two Sum
 */

// @lc code=start
public class Solution {
    public int[] TwoSum(int[] nums, int target)
    {
        foreach (var item1 in nums.Select((value, i) => new { i, value }))
        {
            int index1 = item1.i;
            int num1 = item1.value;

            foreach (var item2 in nums.Select((value, j) => new { j, value }))
            {
                int index2 = item2.j;
                int num2 = item2.value;

                if (index1 != index2 && num1 + num2 == target)
                {
                    return new int[] { index1, index2 };
                }
            }
        }

        return null;
    }
}
// @lc code=end

