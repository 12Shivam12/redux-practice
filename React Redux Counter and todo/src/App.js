import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Todolist from './components/Todolist';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Todo/>
      <Todolist/>
    </div>
  );
}

export default App;
