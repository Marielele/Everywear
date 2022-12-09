import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Stores from './pages/Stores';
import AddShop from './pages/AddShop';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/stores" element={<Stores />} />
        <Route exact path="/addshop" element={<AddShop />} />
      </Routes>
    </div>
  );
}

export default App;
