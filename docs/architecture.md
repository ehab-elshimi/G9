# G9 Project — Architecture

## 1. Architecture Overview

G9 V1 follows a **Layer-Based Architecture**.

The application is organized into layers according to their technical responsibilities.

The primary goals are:
- Clear separation of responsibilities.
- Maintainable and reusable code.
- Controlled dependencies between layers.
- Separation of UI, application logic, and data operations.
- Simplicity without unnecessary abstractions.

**Future direction:** G9 V2 may migrate to Feature-Based Architecture after gaining practical experience with V1.

This future decision does not change the current V1 architecture.

## 2. Project Structure

```text
src/
├── app/
│   └── providers/
├── assets/
├── components/
│   ├── layouts/
│   └── ui/
├── hooks/
├── lib/
├── pages/
│   ├── auth/
│   ├── storefront/
│   └── admin/
├── services/
├── styles/
├── types/
└── utils/
```

## 3. Layer Responsibilities

### app
Application composition and configuration.

Responsible for:
- Application providers.
- Router configuration.
- Root application setup.

### pages
Route-level pages and page composition.

Organized by application context:
- auth
- storefront
- admin

### components
Reusable UI components.

- ui: Generic UI components.
- layouts: Structural application layouts.
- Domain-specific component groups are introduced when needed.

### hooks
Reusable React behavior and shared hooks.

Examples:
- useAuth
- useCart
- useDebounce

### services
API communication and data operations.

Responsibilities:
- HTTP requests.
- API response handling.
- Data operations.

Services must not depend on React.

### types
Shared TypeScript contracts and interfaces.

Examples:
- Product
- User
- Order

### utils
Reusable framework-independent utility functions.

Examples:
- formatCurrency
- formatDate
- calculateDiscount

### lib
Configuration and shared instances of external libraries.

Examples:
- Axios instance.
- TanStack Query client.

### assets
Static resources such as images, icons, and fonts.

### styles
Global CSS and shared styling organization.

## 4. Dependency Rules

Dependencies must follow intentional architectural boundaries.

General rules:

- Pages can use components, hooks, types, and utils.
- Hooks can use services, lib, types, and utils.
- Services can use lib, types, and utils.
- Components can use types and utils, and hooks when required.
- Services must not import React.
- Types and utils must remain independent of application layers.
- No circular dependencies.
- UI components must not make direct API requests.

## 5. Data Flow

Typical product data flow:

```text
ProductsPage
     |
     v
useProducts
     |
     v
productService
     |
     v
Axios Instance
     |
     v
Backend API
```

TanStack Query manages server-state caching and synchronization.

Shared TypeScript contracts define the expected data structures.

Components are responsible for presenting the resulting data.

## 6. Naming Conventions

| Element | Convention | Example |
|---|---|---|
| Components | PascalCase | ProductCard.tsx |
| Pages | PascalCase + Page | ProductsPage.tsx |
| Hooks | camelCase + use | useProducts.ts |
| Services | camelCase | productService.ts |
| Types files | lowercase | product.ts |
| Type names | PascalCase | Product |
| Utilities | camelCase | formatCurrency.ts |
| Folders | lowercase | storefront |
| CSS files | kebab-case | global.css |

## 7. Architectural Principles

1. One primary responsibility per file.
2. Avoid unnecessary abstractions.
3. Do not create empty folders or files without a practical requirement.
4. Keep UI separate from API communication.
5. Reuse shared logic when justified.
6. Avoid circular dependencies.
7. Keep dependencies explicit and controlled.
8. Prefer simple solutions that satisfy real requirements.

## 8. Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- TanStack Query
- Axios
- Lucide React
- Git and GitHub
- Prettier
- Oxlint

Additional dependencies should only be introduced when justified by actual requirements.

## 9. Architecture Evolution

G9 V1 uses Layer-Based Architecture.

G9 V2 may introduce Feature-Based Architecture after evaluating the complexity and maintenance needs of V1.

No premature architectural migration is planned.

---

**Document:** G9 Architecture  
**Version:** V1  
**Status:** Initial Architecture Established