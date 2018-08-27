import React from 'react';
import About from '@/components/About/About.jsx';
import App from '@/components/App/App.jsx';
import Random from '@/components/Random/Random.jsx';
import Dashboard from '@/components/Dashboard/Dashboard.jsx';
import NotFoundPage from '@/components/NotFound/NotFound.jsx';
import Login from '@/components/Login/Login.jsx';
import { HashRouter, Switch, Route, DefaultRoute, NotFoundRoute, IndexRoute } from 'react-router-dom';

export default (
  <HashRouter>
    <App>
      {/* <About/> */}
      {/* <Route exact path="/" component={About} > */}
        {/* <DefaultRoute name="about" component={About}/> */}
        {/* <IndexRoute exact path="/" component={Dashboard} /> */}
        {/* <Route path="/about" component={About} />
        <Route component={NotFoundPage} /> */}
        {/*  */}
        {/* <Route exact path="/login" component={Login} /> */}
      {/* </Route> */}

      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/random" component={Random} />
        <Route exact path="/not" component={NotFoundPage} />
        {/* <NotFoundRoute handler={NotFoundPage}/> */}
      </Switch>
    </App>
  </HashRouter>
);