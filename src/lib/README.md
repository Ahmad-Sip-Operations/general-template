- Utility functions, constants, and shared hooks

- The `lib/` directory holds reusable logic and helpers that don’t belong to any specific domain — shared across the whole app.

- 🧩 What Is the lib/ Folder?
- It includes:

  - Custom hooks (`useRole`, `useDebounce`, etc.)
  - Constants (e.g., roles, routes, status codes)
  - Utility functions (e.g., formatting, parsing)

- ✅ Why Use It?
  - Centralizes helpers for easy reuse
  - Avoids redundant utility code across features
  - Keeps domain code clean and focused
  - Promotes DRY principles
