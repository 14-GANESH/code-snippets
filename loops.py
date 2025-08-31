# Prime Number Checker

def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

# Driver code
number = int(input("Enter a number: "))

if is_prime(number):
    print(f"{number} is a Prime number ")
else:
    print(f"{number} is NOT a Prime number ")
