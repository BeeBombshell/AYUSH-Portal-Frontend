import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import FetchPost1 from './components/FetchPost/FetchPost1';
import PostCard from './components/FetchPost/PostCard';
import Home from './components/Home/Home';
import AuthContextProvider from './contexts/AuthContext';
import HeaderTop from './components/HeaderTop/HeaderTop';
import HomeTop from './components/HomeTop/HomeTop';
import HomeMid from './components/HomeMid/HomeMid';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <div className='Header'>
          <HeaderTop />
          <NavbarHeader />
          <NavbarMenu />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeMid />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/fetchpost" element={<FetchPost1 />} />
            <Route path="/fetchpost/:id" element={<PostCard />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
