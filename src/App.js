import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import FetchPost from './components/FetchPost/FetchPost';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <NavbarHeader />
        <NavbarMenu />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/fetchpost" element={<FetchPost />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
