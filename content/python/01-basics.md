# Python Basics

Get started with Python programming - a beginner's guide.

## Introduction to Python 🐍

Python is a high-level, interpreted programming language known for its:
- Simple, readable syntax
- Large standard library
- Rich ecosystem of packages
- Versatility across domains

## Basic Syntax 📝

### Variables and Data Types

```python
# Numbers
age = 25                 # int
height = 1.75           # float
is_student = True       # boolean
name = "John Doe"       # string

# Lists
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]

# Dictionaries
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Tuple (immutable)
coordinates = (10, 20)
```

### Control Flow

```python
# If statements
age = 18
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")

# Loops
for i in range(5):
    print(i)

while age < 21:
    age += 1
    print(f"Age is now {age}")
```

## Functions 🎯

```python
def greet(name, greeting="Hello"):
    """
    A simple greeting function.
    Args:
        name (str): Person's name
        greeting (str): Greeting word (default: "Hello")
    Returns:
        str: Full greeting message
    """
    return f"{greeting}, {name}! 👋"

# Using the function
message = greet("Alice")
print(message)  # Hello, Alice! 👋
```

## List Comprehension 🔄

```python
# Traditional way
squares = []
for x in range(10):
    squares.append(x**2)

# List comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
```

## Working with Files 📂

```python
# Reading a file
with open("example.txt", "r") as file:
    content = file.read()
    
# Writing to a file
with open("output.txt", "w") as file:
    file.write("Hello, World!")
```

## Error Handling 🚨

```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("Please enter a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Operation completed")
```

## Common Built-in Functions 🛠️

| Function | Description | Example |
|----------|-------------|---------|
| `len()` | Get length | `len([1, 2, 3])` |
| `range()` | Generate sequence | `range(5)` |
| `type()` | Get type | `type(42)` |
| `print()` | Output to console | `print("Hello")` |
| `input()` | Read user input | `input("Name: ")` |

![Python Code Example](https://picsum.photos/600/300?random=5)

## Object-Oriented Programming 🎨

```python
class Dog:
    def __init__(self, name):
        self.name = name
        
    def bark(self):
        return f"{self.name} says woof!"
        
# Creating an instance
my_dog = Dog("Rex")
print(my_dog.bark())  # Rex says woof!
```

## Virtual Environments 🌍

```bash
# Create virtual environment
python -m venv myenv

# Activate
source myenv/bin/activate  # Linux/Mac
myenv\Scripts\activate     # Windows

# Install packages
pip install requests pandas numpy

# Save requirements
pip freeze > requirements.txt
```

## Best Practices 💡

1. Follow PEP 8 style guide
2. Write descriptive variable names
3. Use type hints (Python 3.5+)
4. Document your code
5. Write unit tests
6. Handle errors gracefully
7. Use virtual environments