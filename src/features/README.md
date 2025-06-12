- Business logic + UI tied to a specific domain (e.g., employee, event)

- The features/ directory in your structure is for organizing domain-specific logic and components related to each core area of your application — it's a modular, scalable pattern often used in larger apps.

- 🧩 What Is the features/ Folder?
- It contains feature-specific logic, such as:

  - Pages (optional, if colocated with routes)
  - Forms
  - Custom hooks
  - Validation schemas
  - Local state management
  - Business-specific UI components

- ✅ Why Use It?
  - Helps separate concerns by domain (employee/event/admin)
  - Encourages colocation (hooks + components + logic)
  - Supports modularity and lazy loading per feature if needed
  - Easy to scale — just drop new folders per domain
