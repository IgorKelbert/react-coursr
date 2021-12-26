import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login'
import Todo from './Components/ToDo/Todo';
import Header from './Components/Login/Header';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

function App() {
    const myUser =  { firstName : 'Igor', lastName : 'Kelbert', email : 'a@b.com'}
  return (
       
        <div className="App">
            <Header user = {myUser} />   

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Todo" element={<Todo/> } />
                </Routes>
            </BrowserRouter>,

            
            
            
        </div>
  );
}

export default App;
