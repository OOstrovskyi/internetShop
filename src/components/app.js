import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './navigation/navigation';
import Header from './header/header';
import WrappedFooter from './wrappedComponents/wrappedFooter'
//import AddProduct from './addProduct/addProduct';
import WrappedAddProduct from './wrappedComponents/wrappedAddProduct';
import WrappedListOfProducts from './wrappedComponents/wrappedListOfProducts'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../store/reducers'

import './app.css';

const store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Nav isAdmin={this.props.isAdmin} />
          <Switch>
            <Route exact path="/"
              render={(props) => (
                <WrappedListOfProducts {...props} isAdmin={this.props.isAdmin} />
              )}
            />
            <Route path="/add"
              render={(props) => (
                <WrappedAddProduct {...props} isAdmin={this.props.isAdmin} />
              )}
            />
          </Switch>
        </BrowserRouter>
        <WrappedFooter isAdmin={this.props.isAdmin} />
      </Provider>
    );
  }
}
export default App;