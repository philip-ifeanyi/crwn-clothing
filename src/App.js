import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/ShopPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element={<Homepage />}/>
        <Route exact path = '/shop' element={<ShopPage />}/>
      </Routes>
    </div>
  );
}

export default App;