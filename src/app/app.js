import React from "react";
import ReactDOM from "react-dom";
import myContext from "./context";
const App = () => {
  return (
    <myContext.Consumer>
      {(content) => <h1>Hello World {content.name}</h1>}
    </myContext.Consumer>
  );
};
export default App;
