import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const HandleTodo = () => {
    axios
      .post("http://localhost:8000/api/create", { todo })
      .then((response) => {
        if (response.data.success) {
          setTodoList((e) => [...e, todo]);
          setTodo("");
        } else {
          alert(response.data.message);
        }
      });
  };

  const handleDelete = (id) => {
    axios
      .post("http://localhost:8000/api/delete", { _id:id })
      .then((response) => {
        if (response.data.success) {
          setTodoList(todoList.filter(v=>v._id!==id));
        } else {
          alert(response.data.message);
        }
      });
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/read").then((response) => {
      console.log(response.data);
      if (response.data.success) {
        setTodoList(response.data.data);
      }
    });
  }, []);

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Todo"
        />
        <button onClick={() => HandleTodo()}>Add Todo</button>
      </div>
      <div>
        {todoList.length === 0 ? (
          <div>No todos</div>
        ) : (
          todoList.map((v, i) => {
            return (
              <div key={i}>
                <li>{v.todotitle}</li>
                <button onClick={() => handleDelete(v._id)}>Delete</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
