import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Galaxy from "./game-components/Galaxy";
// Redux
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />

            <div className="sidebars-and-content">
              <LeftSidebar />

              <div className="App-content">
                <Switch>
                  <Route exact path="/galaxy" component={Galaxy} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>

              <RightSidebar />
            </div>

          </div>
        </Router>
      </Provider>
  );
}

export default App;
