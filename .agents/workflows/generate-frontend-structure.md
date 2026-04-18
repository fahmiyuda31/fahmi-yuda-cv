---
description: Aturan Struktur Codebase Frontend (React + TanStack + Shadcn)
---

# Frontend Codebase Structure Workflow

Workflow ini berisi aturan lengkap struktur codebase untuk aplikasi React modern menggunakan stack yang ada di repositori ini. Ikuti aturan ini untuk menjaga konsistensi saat membuat fitur baru atau memigrasi kode.

## 1. Tech Stack Summary
- **Core**: React 19 + TypeScript 5.9 + Vite 7 (or latest stable)
- **Routing**: TanStack Router (Configuration-driven via `menu-config.ts`)
- **State Management**: Zustand (Global) & TanStack Query (Server State)
- **Styling**: Tailwind CSS v4 + Shadcn UI (New York Style)
- **Icons**: Lucide React
- **API Client**: Axios (Singleton pattern in `src/lib/api.ts`)

## 2. Struktur Folder (src/)
Setiap file harus diletakkan di folder yang sesuai:
- `assets/`: Static assets (images, svg).
- `components/`: Komponen reusable.
    - `ui/`: Komponen primitive dari Shadcn.
    - `reusable/`: Komponen bisnis reusable (DataTable, Modals, dll).
    - `layout/`: Komponen struktur (Sidebar, Navbar, Breadcrumb).
- `configs/`: Pusat konfigurasi (App, Env, Menu).
- `errors/`: Error handlers (ApiError class) dan error pages.
- `hooks/`: Custom hooks (Zustand & TanStack Query wrappers).
- `lib/`: Third-party instance (Axios, QueryClient, Utils).
- `pages/`: View utama per modul. Terbagi menjadi `auth/` dan `no-auth/`.
- `routes/`: Konfigurasi route tree dan guards (RequireAuth).
- `schema/`: Zod validation schemas.
- `services/`: Layer komunikasi (API, MQTT, WebSocket).
- `stores/`: Zustand global stores.
- `types/`: Global TypeScript interfaces.
- `utils/`: Helper functions (Permission, URL Params, dll).

## 3. Naming Convention
| Element | Convention | Contoh |
|---------|------------|--------|
| Components | PascalCase | `MasterUser.tsx` |
| Hooks | camelCase (prefix `use`) | `useUser.ts` |
| Services | camelCase (suffix `Service`) | `userService.ts` |
| Stores | camelCase (suffix `Store`) | `authStore.ts` |
| Schemas | kebab-case (suffix `-schema`) | `user-schema.ts` |
| Routes | kebab-case | `/master-data/user` |

## 4. Konfigurasi (BODA Pattern)
Gunakan pola **Build Once, Deploy Anywhere (BODA)** dengan `env-config.ts`.
```typescript
const config = {
  REACT_APP_API_HOST: import.meta.env.REACT_APP_API_HOST ?? window.__RUNTIME_CONFIG__?.REACT_APP_API_HOST ?? "http://localhost:3000/api",
};
```

## 5. Routing & Menu Config
Jangan definisikan route secara manual di `routes/index.tsx`. Tambahkan di `src/configs/menu-config.ts`:
```typescript
{
  name: "User",
  path: "/master-data/user",
  component: lazy(() => import("@/pages/auth/user")),
  protected: true,
  showInMenu: true,
}
```

## 6. Service Pattern
Service harus berupa objek yang mengelompokkan fungsi API:
```typescript
export const userService = {
  fetchUser: async () => {
    const response = await api.get("user");
    return response.data;
  },
};
```

## 7. Hooks Pattern (TanStack Query)
Bungkus service di dalam hook untuk auto-caching dan state management:
```typescript
export function useUsers() {
  return useQuery({
    queryKey: ["users", "list"],
    queryFn: () => userService.fetchUser(),
  });
}
```

## 8. Store Pattern (Zustand)
Gunakan `create` dari Zustand:
```typescript
export const authStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  setAuth: (data) => set({ ...data }),
}));
```

## 9. Schema & Validation
Gunakan Zod untuk schema dan integrasikan dengan `dynamicResolver` jika perlu:
```typescript
const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
export type UserSchemaType = z.infer<typeof userSchema>;
```

## 10. Page Structure
Setiap halaman utama di `pages/` harus memiliki struktur:
- `index.tsx`: Main view & logic.
- `components/`: Komponen spesifik untuk halaman tersebut.
    - `Header.tsx`, `Sections.tsx`, dll.
- `hooks/`: Custom hooks spesifik halaman (opsional).

## 11. Tailwind CSS v4 Troubleshooting
Jika muncul error `[plugin:@tailwindcss/vite:generate:serve] Cannot convert undefined or null to object`:
1.  **Update Packages**: Pastikan `tailwindcss` dan `@tailwindcss/vite` menggunakan versi terbaru (`latest`).
2.  **Explicit Standard CSS**: Jika `@apply` menyebabkan crash di `dev` mode, coba ganti dengan standard CSS properties sementara atau update Vite ke versi terbaru.
3.  **Root Files**: Pastikan tidak ada file non-text besar di root directory yang mungkin ter-scan oleh Tailwind scanner secara tidak sengaja.

## 11. Permission & ACL
Gunakan utility `hasPermission` untuk proteksi UI:
```typescript
{hasCreatePermission("User") && <Button>Add User</Button>}
```

## 12. Langkah Membuat Fitur Baru (Workflow)
1. **Types**: Definisikan interface di `src/types/shared.ts`.
2. **Service**: Buat API caller di `src/services/api/[name].ts`.
3. **Hook**: Buat wrapper useQuery/useMutation di `src/hooks/use-[name].ts`.
4. **Schema**: Buat Zod schema di `src/schema/[name]-schema.ts`.
5. **Page**: Buat folder dan `index.tsx` di `src/pages/auth/[name]`.
6. **Menu Config**: Daftarkan halaman di `src/configs/menu-config.ts`.
