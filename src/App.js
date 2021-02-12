import './App.css';
import { Switch, Route } from "react-router-dom"
import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';
import TodoRoutes from './Components/TodoRoutes';
import TodoItem from "./Components/TodoItem"
import { useSelector } from "react-redux"





function App() {
  let todos = useSelector(state => state)
  
  return (
    <div className="App">
      <div className="FirstComp">
        <TodoInput />
      </div>
      <div className="SecondComp">
        <Switch>
          <Route path="/" exact>
        <TodoRoutes url="/" />
            <table className="Table">
              <TodoList />
    
              {todos.map((todo) => { 
               return  <TodoItem key={todo.id} todo={todo} status={todo.status} buttonVisibility="true" /> 
              })}
               
            </table>
          </Route>

          <Route path="/Completed" exact>
          <TodoRoutes url="completed"  />

          <table className="Table">
            <TodoList />
            { todos.map((todo) => { 
              if (todo.status === "completed") return <TodoItem key={todo.id} todo={todo} buttonVisibility="false"  /> 
            })}
              </table>
              
          </Route>
          <Route path="/Active" exact>
          <TodoRoutes url="active" />

          <table className="Table">
            <TodoList />
            {todos.map((todo) => {
              if (todo.status === "active") return <TodoItem key={todo.id} todo={todo} buttonVisibility="false"  />
            })}
            </table>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
