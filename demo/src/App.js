
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter >
    <NavBar/>
    <div className='container'>
      <Routes>
        <Route path="\" element={<Home/>}/>
        <Route path="\about" element={<About/>}/>
        <Route path="\contact" element={<Contact/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
