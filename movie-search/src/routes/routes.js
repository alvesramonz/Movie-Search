import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Search from '../pages/Search';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={Movie} />

      <Route path="/search/movie/:query" component={Search} />
    </Switch>
  );
}
