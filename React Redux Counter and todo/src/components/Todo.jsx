import React from "react";
import { useState } from "react";
import myStore from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
var basicStyles = {
    height:"200px",
    boxShadow:"0 0 10px red",
    width:"400px",
    margin:"50px auto",
    padding:"30px",
   
}
function Todo () {
    const [state,setState] = useState("");

    const dispatch = useDispatch();

    const sendDataToStore = () =>{
        // myStore.dispatch({
        //     type:"todo",
        //     payload:state
        // })
        dispatch({
            type:"todo",
            payload:state
        })
    }

    return <div style={basicStyles}>
        <h2>Todo App</h2>
        <br />
        <input type="text" placeholder="Enter text"
        onChange={(e) =>{setState(e.target.value)}} />
        
        <button onClick={sendDataToStore}>Add Task</button>
        <br />
    </div>
}
export default Todo;