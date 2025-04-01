import React from "react";
import { useState } from "react";
import ToDoItem from "./todoItem";
import InputArea from "./InputArea";

function App() {

const [items, setItems] = useState([]);

function clickButton(task){
  setItems(prevItems => {return [...prevItems, task]});
}

function deleteItem(id){
setItems(prevItems => {
  return prevItems.filter(
    (item, index) => {
      return index !== id;
    }
  )
})}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      inputText={clickButton}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => < ToDoItem 
          key={index}
          id={index}
          text={todoItem}
          onChecked={deleteItem}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
