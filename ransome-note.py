# 383. Ransom Note

# Easy

# Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

# Each letter in magazine can only be used once in ransomNote.


# Example 1:
# Input: ransomNote = "a", magazine = "b"
# Output: false

# Example 2:
# Input: ransomNote = "aa", magazine = "ab"
# Output: false

# Example 3:
# Input: ransomNote = "aa", magazine = "aab"
# Output: true


# Constraints:

# 1 <= ransomNote.length, magazine.length <= 105
# ransomNote and magazine consist of lowercase English letters.

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        for letter in magazine:
            if letter in ransomNote:
                ransomNote = ransomNote.replace(letter, '', 1)
                magazine = magazine.replace(letter, '', 1)
                if ransomNote == '':
                    return True

        if ransomNote != '':
            return False


sol = Solution()
sol.canConstruct("aa", "ab")
