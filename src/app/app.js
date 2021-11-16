import React ,{useContext} from "react";
import ReactDOM from "react-dom";
import myContext from "./context";

// const App = () => {
//   return (
//     <myContext.Consumer>
//       {(content) => <h1>Hello World {content.name}</h1>}
//     </myContext.Consumer>
//   );
// };
// export default App;



//using hooks

const App = () => {
  const {name} = useContext(myContext)
  return (
    <h1>Hello World {name}</h1>
  );
};
export default App;
