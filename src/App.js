import './App.css';
import ProductScreen from './containers/products/ProductScreen'
import Navbar from './containers/navbar/Navbar'
import { Routes,Route } from 'react-router-dom';
import CartScreen from './containers/cart/CartScreen';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path = '/products' element={ <ProductScreen /> }/>
          <Route path = '/cart' element={ <CartScreen />}/>
        </Routes>
      </div>
  )
}

export default App
