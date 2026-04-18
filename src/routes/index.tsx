import { 
  createRootRouteWithContext, 
  createRoute, 
  Outlet 
} from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { menuConfigs } from '@/configs/menu-config'

export interface MyRouterContext {
  queryClient: QueryClient
}

const rootRoute = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
    </>
  ),
})

// Dynamically create routes from menuConfigs
const routes = menuConfigs.map((config) => {
  return createRoute({
    getParentRoute: () => rootRoute,
    path: config.path,
    component: config.component,
  })
})

export const routeTree = rootRoute.addChildren(routes)
