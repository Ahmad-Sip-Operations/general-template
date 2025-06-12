# scripts/

Utility scripts for automating tasks like database seeding, dummy data generation, and environment setup.

These scripts are especially useful during development and testing, helping simulate real-world scenarios without manual effort.

---

🧩 What Is the scripts/ Folder?

This folder contains Node.js or TypeScript scripts to:

- Seed the database with dummy users or test data
- Reset or clean up development environments
- Preload admin, employee, or event data
- Automate configuration or development setup

---

📄 Example Scripts

- `createDummyUsers.ts` – Generates fake users using Faker or similar libraries
- `seedEmployees.ts` – Adds a sample list of employee accounts to the database
- `resetDatabase.ts` – Clears tables and optionally re-seeds core data
- `setupRoles.ts` – Initializes role-based access control entries (admin, employee, event manager)

---

✅ Why Use It?

- Simplifies development and testing setup
- Makes onboarding faster for new developers
- Supports repeatable local and staging environments
- Keeps scripts organized and version-controlled

- 📌 How to Run a Script
