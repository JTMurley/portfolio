/*
 * @lc app=leetcode id=9 lang=csharp
 *
 * [9] Palindrome Number
 */

// @lc code=start
public class Solution {
    public bool IsPalindrome(int x)
    {
        string numberAsString = x.ToString();
        
        var reverseString = numberAsString.Reverse().ToArray();
        var stringAsArray = numberAsString.ToCharArray();

        if (Enumerable.SequenceEqual(reverseString, stringAsArray))
        {
            return true;
        }

        return false;
    }
}
// @lc code=end

