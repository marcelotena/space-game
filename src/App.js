import React from 'react';
import './App.css';
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Content from "./components/Content";
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Header />

          <div className="sidebars-and-content">
            <LeftSidebar />

            <Content />

            <RightSidebar />
          </div>

        </div>
      </Provider>
  );
}

export default App;
