- Abstracts data source and storage access

- The `repository/` layer serves as a data access abstraction, helping separate business logic from data-fetching and persistence concerns.

- 🧩 What Is the repository/ Folder?
- It may contain:

  - Interfaces for data sources
  - Logic for caching, transformation, pagination
  - Bridges between backend APIs, databases, or local storage

- ✅ Why Use It?
  - Improves data layer testability
  - Allows swapping out storage mechanisms easily
  - Encourages clean architecture principles
  - Acts as a decoupling layer between logic and data
