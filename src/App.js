import React from 'react';
import './App.css';
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="sidebars-and-content">
        <LeftSidebar />

        <Content />

        <RightSidebar />
      </div>

    </div>
  );
}

export default App;
