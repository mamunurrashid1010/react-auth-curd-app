import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import MyRoute from './routes/MyRoute';
import NavBar from './navBar/NavBar';
import '../src/asset/css/custom.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <MyRoute/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
