# Problem -
# Given two strings,
# Write a method to decide if one is a permutation of the other.


def are_permutations(str1, str2):
    # Step 1: Check if lengths are equal
    if len(str1) != len(str2):
        return False

    # Step 2: Sort both strings and compare
    sorted_str1 = ''.join(sorted(str1))
    sorted_str2 = ''.join(sorted(str2))

    return sorted_str1 == sorted_str2


// Test Cases -
print(are_permutations("abc", "bca")); // true
print(are_permutations("abc", "abcd")); // false
print(are_permutations("abc", "cbaa")); // false
print(are_permutations("123", "312")); // true
print(are_permutations("god", "dog")); // true
