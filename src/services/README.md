- API communication and data-fetching logic

- The `services/` directory provides functions that interact with your backend or external APIs — it's the main abstraction for network calls.

- 🧩 What Is the services/ Folder?
- It contains:

  - HTTP request functions (e.g., GET, POST, PUT, DELETE)
  - Axios or Fetch wrappers
  - Domain-specific data handling (employeeService, authService)

- ✅ Why Use It?
  - Centralizes all API logic for easy updates
  - Decouples business logic from data access
  - Improves testability and maintainability
  - Keeps network code out of UI components
