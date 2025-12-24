# Project Overview

This is a **React** web application built with **Vite** and **TypeScript**. It utilizes modern frontend tooling and libraries to provide a responsive and interactive user interface, specifically tailored for an insurance context (Hood Vent Insurance).

## Tech Stack

*   **Framework:** React (v18)
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** shadcn-ui (built on Radix UI primitives)
*   **Routing:** React Router DOM
*   **State Management/Data Fetching:** TanStack Query
*   **Animation:** Framer Motion
*   **Charts:** Recharts
*   **Validation:** Zod & React Hook Form
*   **Icons:** Lucide React

## Architecture

*   **Entry Point:** `src/main.tsx` mounts the application.
*   **Main Component:** `src/App.tsx` sets up providers (QueryClient, Tooltip, Toaster) and defines the routing structure.
*   **Routing:** Client-side routing is handled by `react-router-dom`. Routes are defined in `src/App.tsx`.
*   **Alias:** The `@` symbol is configured as an alias for the `src` directory.

## Key Directories

*   `src/components/ui`: Contains reusable UI components (likely auto-generated or copied from shadcn-ui).
*   `src/pages`: Contains the main page views mapped to routes (e.g., `Index.tsx`, `About.tsx`, `Contact.tsx`).
*   `src/hooks`: Custom React hooks (e.g., `use-mobile.tsx`, `use-toast.ts`).
*   `src/lib`: Utility functions (`utils.ts`).
*   `public`: Static assets like images and icons.

## Building and Running

### Prerequisites
*   Node.js & npm (via `nvm` recommended)

### Development Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server (default port 8080). |
| `npm run build` | Builds the application for production. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

## Development Conventions

*   **Styling:** Use Tailwind CSS utility classes. Avoid standard CSS files where possible, except for global styles in `src/index.css` or `src/App.css`.
*   **Components:** Reusable components should go in `src/components`. UI primitives (buttons, inputs) stay in `src/components/ui`.
*   **Imports:** Use the `@/` alias for imports from the `src` directory to keep paths clean.
*   **Type Safety:** Strict TypeScript mode is enabled. Ensure all props and state are properly typed.
