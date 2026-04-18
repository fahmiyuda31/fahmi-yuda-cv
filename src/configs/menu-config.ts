import { lazy } from 'react'

export interface MenuItem {
  name: string
  path: string
  component: React.LazyExoticComponent<any>
  protected: boolean
  showInMenu: boolean
  icon?: React.ReactNode
}

export const menuConfigs: MenuItem[] = [
  {
    name: "CV",
    path: "/",
    component: lazy(() => import("@/pages/no-auth/cv")),
    protected: false,
    showInMenu: true,
  },
]
