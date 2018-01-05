import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Basiclayout from './layout/Basiclayout';
import Firstpage from './layout/firstpagelayout';
// import Enterpage from './layout/Enterpage';
import Self from './routes/self';
import essay from './routes/essay';
import contact from './routes/contact';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/first" component={Basiclayout} />
        <Route path="/" component={Firstpage} />
        <Route path="/first/contact" component={contact} />
        <Route path="/first/essay" component={essay} />
        <Route path="/first/self" component={Self} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
