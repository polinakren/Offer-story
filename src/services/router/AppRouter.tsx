import React, { Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import { Loader } from '~components';
import { appRouteComponents } from '~services/router/appRouteComponents';
import { routeNames, AppRouteNames } from '~services/router/routes';
import { Route } from '~services/router/react-router';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {Object.entries(appRouteComponents).map(
        // @ts-ignore
        ([pathName, Component]: [AppRouteNames, React.ComponentType]) => (
          <Route
            path={routeNames[pathName]}
            key={pathName}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            }
          />
        )
      )}
    </Routes>
  </BrowserRouter>
);
