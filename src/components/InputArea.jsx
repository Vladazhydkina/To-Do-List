import React from "react";
import { useState } from "react";

function InputArea(props){

const [task, setTask] = useState("");

  function handleChange(event){
    setTask(event.target.value)
  }

    return(
        <div className="form">
        <input onChange={handleChange} type="text" value={task}/>
        <button onClick={() => {
          props.inputText(task);
          setTask("");
        }}>
          <span>Add</span>
        </button>
      </div>
    );
}

export default InputArea;