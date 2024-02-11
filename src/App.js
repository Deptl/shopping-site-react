import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from "./Pages/home";
import { Loginsignup } from "./Pages/loginsignup";
import { ContextProvider } from './context/context';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            {/* <Route path='/LoginSignup' element={<Loginsignup />} /> */}
            <Route path='/Login' element={<Login />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
