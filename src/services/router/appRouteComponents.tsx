import React, { lazy } from 'react';

import { withAppBar } from '~components';
import { AppRouteNames } from '~services/router/routes';

const HomeModule = lazy(() => import('~modules/Home/Home'));
const CompanyModule = lazy(() => import('~modules/Company/Company'));

export type RouteMap = Record<AppRouteNames, React.ComponentType | React.ReactNode>;

export const appRouteComponents: RouteMap = {
  home: withAppBar(HomeModule),
  company: withAppBar(CompanyModule),
};
