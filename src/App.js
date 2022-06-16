import Card from './components/Card/Card';
import './App.css';
import Carousel from './components/Carousel/CarouselComp';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <NavbarMenu />
      <Login />
      {/* <Carousel /> */}
      {/* <Card /> */}
    </div>
  );
}

export default App;
