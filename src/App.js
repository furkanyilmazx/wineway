import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { routes } from '@wineway/routes';
import NotFoundPage from '@wineway/pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ id, path, exact, component: Component, loading }) => {
          return (
            <Route
              key={id}
              exact={!!exact}
              path={path}
              component={() => (
                <Suspense fallback={loading || <div />}>
                  <Component />
                </Suspense>
              )}
            />
          );
        })}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
