# OOP Concepts in Java

Understanding Object-Oriented Programming (OOP) concepts is crucial for Java development.

## Core OOP Concepts 🎯

### 1. Encapsulation 📦

Bundling data and methods that operate on that data within a single unit:

```java
public class BankAccount {
    private double balance;  // Data hiding
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}
```

### 2. Inheritance 👨‍👦

Creating new classes based on existing ones:

```java
public class Animal {
    protected String name;
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println(name + " says woof!");
    }
}
```

### 3. Polymorphism 🔄

Same interface, different implementations:

```java
interface Shape {
    double getArea();
}

class Circle implements Shape {
    private double radius;
    
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle implements Shape {
    private double width, height;
    
    public double getArea() {
        return width * height;
    }
}
```

## Best Practices 📝

| Principle | Description |
|-----------|-------------|
| SOLID | Single responsibility, Open-closed, etc. |
| DRY | Don't Repeat Yourself |
| KISS | Keep It Simple, Stupid |
| YAGNI | You Aren't Gonna Need It |

## Real-world Example 🌍

Here's a practical example combining multiple OOP concepts:

```java
public abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    
    public abstract void startEngine();
    
    public void displayInfo() {
        System.out.printf("%d %s %s%n", year, brand, model);
    }
}

public class ElectricCar extends Vehicle {
    private int batteryLevel;
    
    @Override
    public void startEngine() {
        System.out.println("Starting electric motor...");
    }
    
    public void charge() {
        batteryLevel = 100;
        System.out.println("Battery fully charged! ⚡");
    }
}
```

![OOP Concept Diagram](https://picsum.photos/600/300?random=2)

## Design Patterns 🎨

Common OOP design patterns in Java:

1. Singleton Pattern
2. Factory Pattern
3. Observer Pattern
4. Strategy Pattern

## Practice Exercise 💪

Try implementing this class hierarchy:

```java
// TODO: Create these classes
interface Playable { }
class Instrument { }
class Guitar extends Instrument implements Playable { }
class Piano extends Instrument implements Playable { }
```