import React, { useState, useEffect } from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  
  const [todos, setTodos] = useState(setInitialTodos) 

  function setInitialTodos(){
    console.log("initial state")

    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)

    return savedTodos || []

  }

  useEffect(() => {
    console.log("mounted or state updated")

    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])
  
  // state = {
  //   todos: [
  //     {
  //       id: uuidv4(),
  //       title: "Setup development environment",
  //       completed: true
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Develop website and add content",
  //       completed: false
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Deploy to live server",
  //       completed: false
  //     }
  //   ]
  // };

  // const handleChange = id => {
  //   this.setState(prevState => ({    
  //     todos: prevState.todos.map((todo) => {     
  //       if (todo.id === id) {  
  //         return {
  //           ...todo, completed: !todo.completed
  //         }      
  //       }      
  //       return todo;    
  //     })  
  //   }));    
  // };

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  // const delTodo = id => {
  //   this.setState({    
  //     todos: [      
  //       ...this.state.todos.filter(todo => {        
  //         return todo.id !== id;      
  //       })    
  //     ]  
  //   });
  // };

  const delTodo = id => {
      setTodos([
        ...todos.filter(todo => {
          return todo.id !== id ;
      })
    ])
  };  
  // const addTodoItem = title => {
  //   const newTodo = {    
  //     id: uuidv4(),    
  //     title: title,    
  //     completed: false  
  //   };  
  //   this.setState({    
  //     todos: [...this.state.todos, newTodo]  
  //   });
  // };

  const addTodoItem = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };  
    setTodos([...todos, newTodo])
  };

  
  // const setUpdate = (updatedTitle, id) => {
  //   this.setState({
  //     todos: this.state.todos.map((todo) => {
  //       if(todo.id === id) {
  //         todo.title = updatedTitle
  //       }
  //       return todo
  //     })
  //   })
  // }

  const setUpdate = (updatedTitle, id) => {
      setTodos(
        todos.map((todo) => {
          if(todo.id === id){
            todo.title = updatedTitle
          }
          return todo
        })
      )
  }

  //   this.setState({
  //     todos: this.state.todos.map((todo) => {
  //       if(todo.id === id) {
  //         todo.title = updatedTitle
  //       }
  //       return todo
  //     })
  //   })
  // }



  // useEffect(() => {
  //   console.log("test run")

  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)

  //   if(loadedTodos){
  //     setTodos(loadedTodos)
  //   }

  // }, [setTodos])



  
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodosList 
            todos={todos} 
            handleChangeProps={handleChange} 
            deleteTodoProps={delTodo}
            setUpdate ={setUpdate} 
          />
        </div>
      </div>
    );

}
export default TodoContainer