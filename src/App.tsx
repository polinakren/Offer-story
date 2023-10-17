import React from 'react';

import { QueryProvider } from '~services/api';
import { AppRouter } from '~services/router/AppRouter';
import { ErrorCatcher } from '~services/error-boundaries/ErrorCatcher';

function App() {
  return (
    <ErrorCatcher>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </ErrorCatcher>
  );
}

export default App;
