# Getting Started with Spring Boot

Learn how to set up and create your first Spring Boot application.

## What is Spring Boot? 🌱

Spring Boot is an opinionated framework that makes it easy to create stand-alone, production-grade Spring applications.

## Prerequisites ✅

- Java 8 or later
- Maven or Gradle
- Your favorite IDE

## Creating a New Project 🚀

### Using Spring Initializr

1. Visit [start.spring.io](https://start.spring.io)
2. Configure your project:
   ```properties
   Group: com.example
   Artifact: demo
   Dependencies: Web, JPA, Actuator
   ```

### Manual Setup

Add these dependencies to your `pom.xml`:

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.0</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

## Your First Application 💻

```java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

@RestController
class HelloController {
    @GetMapping("/hello")
    String hello() {
        return "Hello, Spring Boot! 👋";
    }
}
```

## Application Properties 📝

Configure your app in `application.properties`:

```properties
# Server configuration
server.port=8080
server.servlet.context-path=/api

# Database configuration
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=
```

## Project Structure 📂

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── example/
│   │           ├── DemoApplication.java
│   │           ├── controller/
│   │           ├── service/
│   │           └── model/
│   └── resources/
│       └── application.properties
└── test/
```

![Spring Boot Architecture](https://picsum.photos/600/300?random=3)

## Running the Application ▶️

```bash
# Maven
./mvnw spring-boot:run

# Gradle
./gradlew bootRun
```

## Next Steps 👣

- Learn about [RESTful Web Services](/content/spring-boot/02-rest.md)
- Explore Spring Data JPA
- Add Spring Security
- Configure Actuator endpoints