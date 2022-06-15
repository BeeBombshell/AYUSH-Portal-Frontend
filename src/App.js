import Card from './components/Card/Card';
import './App.css';
import Carousel from './components/Carousel/CarouselComp';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';
import NavbarMenu from './components/NavbarMenu/NavbarMenu';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <NavbarMenu />
      {/* <Carousel /> */}
      {/* <Card /> */}
    </div>
  );
}

export default App;
