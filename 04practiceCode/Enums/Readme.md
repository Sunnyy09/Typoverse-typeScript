# Enums

### Enums are typically used when you need a set of predefined constant values that represent distinct, often related options. They help make the code more readable and maintainable compared to using raw strings, numbers, or objects directly. Here are a few cases where enums are commonly used instead of objects or other data structures:

1. Fixed Set of Options (State Management):
   Example: If you're managing the state of a process, like a task (e.g., "pending", "in-progress", "completed"), using enums helps ensure you're only working with valid states.

```enum TaskStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed'
}

function getTaskStatus(status: TaskStatus) {
  if (status === TaskStatus.PENDING) {
    console.log("Task is still pending.");
  }
}
```

Why Enums: Enums make the code self-explanatory (clear states) and reduce errors like using a wrong string or number for status.

2. Avoiding Magic Strings or Numbers:
   Example: If you have multiple places where certain values are used (like API response codes or specific keys), enums can replace raw strings or numbers.

```enum ApiStatus {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500
}

if (response.status === ApiStatus.SUCCESS) {
  console.log("Request was successful");
}
```

Why Enums: Using enums avoids "magic strings" (like response.status === "200") and makes the code more maintainable and less prone to typos.

3. Configuration Constants:
   Example: When your application has predefined settings, such as roles or permissions.

```
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

const currentUserRole = UserRole.ADMIN;
if (currentUserRole === UserRole.ADMIN) {
  console.log("You have admin privileges.");
}
```

Why Enums: They provide better organization compared to using strings or objects and clearly define the expected values, ensuring consistency across the application.

5. Switch Case Statements:
   Example: If you're using a switch case to handle specific actions, enums can make the case labels more readable and reduce mistakes.

```
enum Actions {
  LOGIN = 'login',
  LOGOUT = 'logout',
  REGISTER = 'register'
}

switch (action) {
  case Actions.LOGIN:
    console.log("Logging in...");
    break;
  case Actions.LOGOUT:
    console.log("Logging out...");
    break;
  case Actions.REGISTER:
    console.log("Registering...");
    break;
}
```

Why Enums: Enums help in avoiding hard-coded string values in the switch case, making the code more maintainable and readable.

6. Comparison with Objects:
   Example: Enums are more restrictive than objects, ensuring that only the defined values are used.

```
// Object example
const Status = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed'
};

// Enum example
enum Status {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed'
}
```

Why Enums: Enums provide type safety, and you cannot add arbitrary keys to an enum object (in contrast to a plain JavaScript object), preventing accidental misuse.

## When to Use Enums:

Clarity: When you need a set of related constants (states, roles, permissions, etc.), enums make it easier to understand the meaning of values.
Type Safety: In languages like TypeScript, enums ensure that only predefined values are used, preventing potential bugs.
Scalability: If your set of options might expand in the future, enums make it easy to add more options without affecting other parts of your code.
