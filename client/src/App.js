import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Stores from './pages/Stores';
import AddShop from './pages/AddShop';
import MyShops from './pages/MyShops';
import Shop from './pages/Shop';
import MyShop from './pages/MyShop';
import AddItem from './pages/AddItem';
import Search from './pages/Search';
import Statistics from './pages/Statistics';

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
        <Route exact path="/myshops" element={<MyShops />} />
        <Route exact path="/shop/:idTienda" element={<Shop />} />
        <Route exact path="/myshop/:idTienda" element={<MyShop />} />
        <Route exact path="/additem/:idTienda" element={<AddItem />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/statistics/:idTienda" element={<Statistics />} />
        <Route exact path="/comment/:idTienda" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;
