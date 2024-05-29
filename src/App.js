import './App.css';
import AddPost from './FrontEnd/AddPost';
import Hero from './FrontEnd/Hero';
import Login from './FrontEnd/Login';
import Register from './FrontEnd/Register';
import DeletePost from './FrontEnd/DeletePost';
import Dashboard from './FrontEnd/Dashboard';
import UpdatePost from './FrontEnd/UpdatePost';
import BlogPostList from './FrontEnd/BlogPostList';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RetrievePostById from './FrontEnd/RetrievePostById';


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
        <Route exact path='/dashboard' element={<Dashboard />}></Route>
        <Route exact path='/update' element={<UpdatePost />}></Route>
        <Route exact path='/listblogpost' element={<BlogPostList />}></Route>
        <Route exact path='/getbyid' element={<RetrievePostById />}></Route>

      </Routes>
      </BrowserRouter>

      </>
  );
}

export default App;
