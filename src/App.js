import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from "./Pages/home";
import { ContextProvider } from './context/context';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { Reviews } from './Pages/Reviews';
import { Personalinfo } from './Pages/Personalinfo';
import { Checkout } from './Pages/Checkout';

function App() {
  return (
    <div className="App">
      {/* Wrapping with Context Provider */}
      <ContextProvider>
        {/* Router for routing through whole website */}
        <Router>
          {/* Setting nvbar above routes so that it is displayed in whole website */}
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Reviews' element={<Reviews />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Personalinfo' element={<Personalinfo />} />
            <Route path='/Checkout' element={<Checkout />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
