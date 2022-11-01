import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import './App.css';
import AddBlog from './components/AddBlog';
import Auth from './components/Auth';
import BlogDetail from './components/BlogDetail';
import Header from './components/Header';
import UserBlog from './components/UserBlog';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn)

  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/myBlogs" element={<UserBlog/>}/>
        <Route path="/myBlogs/:id" element={<BlogDetail/>}/>
        <Route path="/blogs/add" element={<AddBlog/>}/>
      </Routes>
    </main>
    </>
  );
}

export default App;
