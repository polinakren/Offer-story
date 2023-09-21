import React, { lazy } from 'react';

import { AppRouteNames } from '~services/router/routes';

const HomeModule = lazy(() => import('~modules/Home/Home'));

export type RouteMap = Record<AppRouteNames, React.ComponentType | React.ReactNode>;

export const appRouteComponents: RouteMap = {
  home: HomeModule,
};
