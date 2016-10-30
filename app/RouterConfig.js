import React from 'react';
import { Router, Route, Link,IndexRoute,hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';   
import ConfigureStore from './base/stores/ConfigureStore';

import TrafficLightView from "fyBus/light/views/TrafficLightView";  

const store = ConfigureStore(); 

var RouterConfig=(
	<Provider store={store} key="provider">
		 <Router history={hashHistory}>     
	        <Route path="/" component={TrafficLightView} />  
	      </Router>
	</Provider>);

module.exports=RouterConfig; 