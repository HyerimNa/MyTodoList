import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  
  const [todos, setTodo] = useState([
    { id: 1, title: "todolist 만들기"},
  ]);

  
  const nextId =useRef(2);

  const addbtn = () => {
    
    if(title === '') {
      alert('할일을 입력해주세요.');
      return;
    }

    const todo = {
      id: nextId.current,
      title: title,
    };
    setTodo(todos.concat(todo));
    setTitle("")
    nextId.current += 1;
    console.log(todos)
  };
  
  return (
    <div className="App">
      <input
        className='todoinput'
        type='text' 
        placeholder="할일을 입력하세요"
        onChange={onChange}
        value={title}
        />
      <button onClick={addbtn}>추가하기</button>
      <h2>Todo List</h2>
      <div className="list-wrapper">
      <div className="list-container">
      {todos
          .map((todo) => {
            return (
              <div className="todo-container">
                {todo.title}
              </div>
      )})}
      </div>
      </div> 
    </div>
  );
}

export default App;
