import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainContainer from './components/MainContainer/MainContainer';
import Products from './components/Products/Products';
import SideBar from './components/SideBar/SideBar';
function App() {
  return (
    <div className="App" id="outer-container">
      {/* <SideBar isOpen={true} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right></SideBar> */}
      <NavBar></NavBar>

      <MainContainer></MainContainer>
      <Products></Products>
      
    </div>
  );
}

export default App;
