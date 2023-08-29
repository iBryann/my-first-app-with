import { RouteDefinition, Router, useRoutes } from '@solidjs/router';
import { JSX, lazy } from 'solid-js';

interface Props {
  children: JSX.Element;
}

const ROUTES: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/Todo'))
  },
  {
    path: '/form',
    component: lazy(() => import('../pages/Form'))
  }
];

export const AppRouter = (props: Props) => {
  const Routes = useRoutes(ROUTES);

  return (
    <Router>
      {props.children}

      <Routes />
    </Router>
  );
};