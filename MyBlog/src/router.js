import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Basiclayout from './layout/Basiclayout';
import Firstpage from './layout/firstpagelayout';
import Essaypage from './layout/essaypage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/essay" component={Essaypage} />
        <Route path="/first" component={Basiclayout} />
        <Route path="/" component={Firstpage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
