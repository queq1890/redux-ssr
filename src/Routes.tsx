import * as React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Home from './components/Home';
import AboutUs from './components/AboutUs';

const Routes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/contact'} component={AboutUs} />
      </Switch>
    </div>
  );
};

export default Routes;
