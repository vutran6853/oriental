import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';

export default (
    <Switch>
      <Route  path='/photoGallery' component={ PhotoGallery } ></Route>
    </Switch>
)