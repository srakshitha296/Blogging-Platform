import './App.css';
import AddPost from './FrontEnd/AddPost';
import Hero from './FrontEnd/Hero';
import Login from './FrontEnd/Login';
import Register from './FrontEnd/Register';
import GetPost from './FrontEnd/GetPost';
import DeletePost from './FrontEnd/DeletePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Hero />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/addpost' element={<AddPost />}></Route>
        <Route exact path='/delete' element={<DeletePost />}></Route>
        <Route exact path='/get' element={<GetPost />}></Route>
      </Routes>
      </BrowserRouter>

      </>
  );
}

export default App;
