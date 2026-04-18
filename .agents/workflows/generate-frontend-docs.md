---
description: Generate comprehensive frontend documentation
---

# Generate Frontend Documentation Workflow

This workflow is designed to generate standard, comprehensive documentation for any frontend project, based on the `uniair-sorting-system` documentation structure. The goal is to produce a consistent documentation format regardless of the specific frontend framework or language used.

## Steps

1. **Analyze Project Structure and Tech Stack Summary on README.MD**
   Analyze the project's package.json, tsconfig files, vite.config.ts, and main source files to identify the core technologies, frameworks, and libraries used. Create a summary section in the README.md that includes:
   - Project name and description
   - Core framework and version (e.g., React 19 + TypeScript + Vite)
   - Key libraries for routing, state management, styling, forms, API client, realtime communication
   - Prerequisites (Node.js version, package manager)
   - Brief overview of the application's purpose and target users

2. **Generate `docs/01-tech-stack-and-prerequisites.md`**
   Create a detailed technical documentation file that covers:
   - Core Framework: List React version, TypeScript, build tool (Vite)
   - Routing: TanStack Router
   - State Management: Zustand for global state, TanStack Query for server state/API caching
   - Styling: Tailwind CSS version + Shadcn UI (Radix UI primitives)
   - Form & Validation: React Hook Form + Zod
   - API Client: Axios with custom instance
   - Realtime/IoT: Socket.IO Client & MQTT
   - Table Management: TanStack Table
   - Date Handling: Date-fns & Day.js
   - Prerequisites section with Node.js version requirements and package manager

3. **Generate `docs/02-setup-and-run.md`**
   Document the complete setup and execution process including:
   - Installation command (npm install)
   - Environment variables explanation: difference between .env (build-time) and public/runtime-env.js (runtime) for Build Once, Deploy Anywhere concept
   - Example .env file with variables like NODE_ENV, REACT_APP_API_HOST, REACT_APP_SOCKET_HOST, REACT_APP_MQTT_HOST
   - Development server command (npm run dev)
   - Build and preview commands (npm run build, npm run preview)
   - Code quality tools: ESLint for code style, SonarQube for security testing

4. **Generate `docs/03-folder-architecture.md`**
   Provide a comprehensive folder structure guide for the src/ directory:
   - assets/: Static assets like images, custom SVG icons
   - components/: Reusable React components with ui/ subfolder for Shadcn components
   - configs/: Centralized configurations, especially menu-config.ts for routing and ACL
   - errors/: Error page handlers (404, unauthorized, etc.)
   - hooks/: Custom hooks for reusable React logic
   - lib/: Third-party library utilities (axios interceptor, Tailwind utils)
   - pages/: Main UI components/views per module page
   - routes/: Route tree configuration auto-generated from MENU_LIST
   - schema/: Zod validation schemas for forms and API payloads
   - services/: Business logic layer for API calls, Socket, MQTT
   - stores/: Global state management with Zustand (auth, permissions)
   - types/: Global TypeScript interfaces/types
   - utils/: Specific utility functions (ACL permission checks)

5. **Generate `docs/04-development-workflow.md`**
   Create detailed technical how-to guides covering:
   - Adding new routes and pages using Menu Config with lazy imports, not manual route definitions
   - Using Shadcn CLI for adding new UI primitives and modifying CSS variables in index.css
   - Implementing ACL/authorization in UI components using hasCreatePermission, hasUpdatePermission utilities
   - Adding new API integrations using Service Controller Pattern with axios instance, custom hooks with TanStack Query, and component usage examples

6. **Generate `docs/05-user-guide.md`**
   Document functional and business context for developers:
   - Realtime & Monitoring modules (Andon Monitoring with Socket/MQTT, History with TanStack Table)
   - Master Data CRUD modules (User, Role, Courier, Express Company, Tracking Code)
   - Security & Settings (Access Control List for permissions management)
   - Private Accounts (Profile, Login with JWT handling)

7. **Generate/Update `README.md`**
   Create or update the main README with:
   - Project title and description
   - Documentation section with table of contents linking to all docs files
   - Note for new developers recommending reading order
   - Brief tech stack summary

## Execution Rules

- Always use Indonesian language (Bahasa Indonesia) as the default language for the documentation unless requested otherwise.
- Ensure the output is well-formatted Markdown with tables, code blocks, and clear headings.
- Create the `docs/` folder if it doesn't already exist before generating the files.
