import React from "react";
import ReactDOM from "react-dom";
import App from './app'
import myContext from './context'

const MyApp= ()=>{

    const state = {
        name: "gourab"
    }
    return (
        <myContext.Provider value={{name:state.name}}>
            <App/>
        </myContext.Provider>
      
    )
}


ReactDOM.render(<MyApp />,document.getElementById("root"))