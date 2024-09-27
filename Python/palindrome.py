class Solution:
    def isPalindrome(self, x: int) -> bool:
        number = str(abs(x))
        print(number)
        return str(x) == number[::-1]
