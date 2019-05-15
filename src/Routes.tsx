import * as React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Counter from './containers/Counter';
import AnimalsList from './containers/AnimalsList';

const Routes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/contact'} component={AboutUs} />
        <Route exact path={'/count'} component={Counter} />
        <Route exact path={'/animals'} component={AnimalsList} />
      </Switch>
    </div>
  );
};

export default Routes;
