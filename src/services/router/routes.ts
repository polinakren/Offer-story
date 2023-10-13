export const routeNames = {
  home: '/',
  company: '/company/:company',
};

export type AppRouteNames = keyof typeof routeNames;
