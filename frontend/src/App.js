import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Playlist from "./components/Playlist/Playlist";
import Watch from "./components/Watch/Watch";
import { Switch, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/watch/:id" component={Watch} />
        <Route path="/" exact component={Playlist} />
      </Switch>
    </div>
  );
}

export default App;
