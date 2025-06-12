- Route definitions and layouts for the entire application

- The `app/` directory uses Next.js App Router conventions to define routes, layouts, and nested segments. It contains all public and role-based route structures.

- 🧩 What Is the app/ Folder?
- It includes:

  - Public routes (e.g., login, register, landing page)
  - Role-based dashboards (employee, admin, event manager)
  - Layouts specific to each role
  - Root layout for shared wrappers (e.g., navbar, theme)

- ✅ Why Use It?
  - Enables file-based routing using Next.js conventions
  - Supports per-role routing logic
  - Encourages clean separation of route ownership
  - Built-in support for layout nesting, middleware, and route groups
