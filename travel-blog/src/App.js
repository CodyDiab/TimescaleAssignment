import {useState} from "react";
// import headshot from './images/headshot.jpg';
// import heroBackground from './images/hero-background.jpg';
import './App.scss';
import Nav from './components/Nav'
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Footer from './components/Footer'

function App() {
  const [ currentPage, handlePageChange] = useState('Home')

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About/>
     case 'Blog':
        return <Blog/>;
      case 'Home':
        return <Home/>;
      default:
        return <Home/>
    }
  }
  return (
    <div className="app">
         <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
         
         {renderPage()}

        
         
     <Footer/>
    </div>
  );
}

export default App;
