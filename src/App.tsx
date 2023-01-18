import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dashboard } from "./Components/blockchainList";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Dashboard}></Route>
      </Router>
    </>
  );
}
export default App;
