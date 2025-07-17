/*
 * @lc app=leetcode id=13 lang=csharp
 *
 * [13] Roman to Integer
 */

// @lc code=start
public class Solution {
    public int RomanToInt(string s)
    {
        var romanNumerals = new Dictionary<char, int>
        {
            { 'I', 1 },
            { 'V', 5 },
            { 'X', 10 },
            { 'L', 50 },
            { 'C', 100 },
            { 'D', 500 },
            { 'M', 1000 }
        };

        var romanNumeralPairs = new Dictionary<string, int>
        {
            { "CM", 900 },
            { "CD", 400 },
            { "XL", 40 },
            { "XC", 90 },
            { "IV", 4 },
            { "IX", 9 }
        };

        var total = 0;
        var stringLength = s.Length;
        bool skipNext = false;

        foreach (var item in s.Select((value, i) => new { i, value }))
        {
            var value = item.value;
            var index = item.i;

            if (skipNext)
            {
                skipNext = false;
                continue;
            }

            if (index + 1 < s.Length)
            {
                var nextValue = s[index + 1];

                var combinedString = value.ToString() + nextValue.ToString();

                if (romanNumeralPairs.ContainsKey(combinedString))
                {
                    total += romanNumeralPairs[combinedString];
                    skipNext = true;
                    continue;
                }
            }

            if (romanNumerals.ContainsKey(value))
            {
                total += romanNumerals[value];
            }

        }
        return total;
    }
}
// @lc code=end

