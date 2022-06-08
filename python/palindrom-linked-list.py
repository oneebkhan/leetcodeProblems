# 234. Palindrome Linked List
# Easy



# Given the head of a singly linked list, return true if it is a palindrome.

# Example 1:
# Input: head = [1,2,2,1]
# Output: true

# Example 2:
# Input: head = [1,2]
# Output: false
 

# Constraints:

# The number of nodes in the list is in the range [1, 105].
# 0 <= Node.val <= 9




# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        f = ListNode(head)
        stack: list = []
        p: bool = True
        flag: bool = False
        
        f.val = head.val
        f.next = head.next
        
        if(head.next == None):
            return True
        
        if(head.next.next == None):
            return head.val == head.next.val
        
        while head != None and head.next != None:
            if head != None:
                if f != None and f.next != None:
                    stack.append(head.val)

                if f != None and f.next == None:
                    head = head.next
                    flag = True

                if(f != None):
                    f = f.next
                    if(f != None):
                        f = f.next
                
                if head != None and flag == False:
                    head = head.next

                if f == None and len(stack) > 0:
                    p = ((head.val == stack.pop()) and p)
                    
                if head != None and flag == True:
                    head = head.next
                
        return p