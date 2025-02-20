import { lazy } from "react";

export interface RouteConfig {
  path: string;
  label: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

export const routes: RouteConfig[] = [];

export function addRoute(config: {
  path: string;
  label: string;
  componentId: string;
}) {
  routes.push({
    path: config.path,
    label: config.label,
    component: lazy(
      () => import(`./dessn-component-routes/${config.componentId}.tsx`)
    ),
  });
}
