# Building RESTful Web Services

Learn how to create RESTful web services with Spring Boot.

## REST Basics 🌐

REST (Representational State Transfer) is an architectural style for designing networked applications.

### HTTP Methods

| Method | Usage |
|--------|--------|
| GET | Retrieve a resource |
| POST | Create a resource |
| PUT | Update a resource |
| DELETE | Remove a resource |

## Creating a REST Controller 🎮

```java
@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;
    
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }
    
    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException());
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@RequestBody Book book) {
        return bookService.save(book);
    }
    
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        // Update logic here
        return bookService.update(id, book);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteById(id);
    }
}
```

## Data Transfer Objects (DTOs) 📦

```java
public class BookDTO {
    private Long id;
    private String title;
    private String author;
    private LocalDate publishDate;
    
    // Getters, setters, constructors
}
```

## Exception Handling 🚨

```java
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex) {
        return new ErrorResponse("Resource not found");
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        // Validation error handling
        return new ErrorResponse("Validation failed");
    }
}
```

## OpenAPI Documentation 📚

Add Springdoc OpenAPI:

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-ui</artifactId>
    <version>1.6.9</version>
</dependency>
```

Annotate your controller:

```java
@Tag(name = "Book Management", description = "APIs for managing books")
public class BookController {
    @Operation(summary = "Get all books")
    @GetMapping
    public List<Book> getAllBooks() {
        // ...
    }
}
```

![REST API Documentation](https://picsum.photos/600/300?random=4)

## Testing REST APIs 🧪

```java
@WebMvcTest(BookController.class)
class BookControllerTest {
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private BookService bookService;
    
    @Test
    void shouldReturnAllBooks() throws Exception {
        // Given
        given(bookService.findAll())
            .willReturn(List.of(new Book("1984", "Orwell")));
            
        // When & Then
        mockMvc.perform(get("/api/books"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].title").value("1984"));
    }
}
```

## Best Practices 💡

1. Use proper HTTP methods
2. Return appropriate status codes
3. Version your APIs
4. Use DTOs for request/response
5. Implement HATEOAS when needed
6. Handle errors consistently
7. Document your APIs
8. Write comprehensive tests

## CORS Configuration 🌍

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:3000")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*");
    }
}
```