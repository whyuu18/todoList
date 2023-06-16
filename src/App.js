import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import AddToForm from './components/CreateTodo';

import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux</h1>
        <AddToForm />
        <hr />
        <TodoList />
        <hr />
      </div>
    </Provider>
  );
}

export default App;
