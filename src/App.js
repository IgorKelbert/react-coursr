import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login'
import Todo from './Components/ToDo/Todo';
import Header from './Components/Login/Header';

function App() {
    const myUser =  { firstName : 'Igor', lastName : 'Kelbert', email : 'a@b.com'}
  return (
       
        <div className="App">
            <Header user = {myUser} />       
            <Login />
            <Todo/>
        </div>
  );
}

export default App;
