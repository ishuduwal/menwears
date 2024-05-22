import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar/Navbar'
import { Signin } from './components/user/Signin';
import { Signup } from './components/user/Signup';
import { Product } from './components/product/Product';
import { Productdetail } from './components/product/Productdetail';
import { Dashboard } from './components/admin/Dashboard';
import { Home } from './components/home/Home';
import { Cart } from './components/navbar/Cart';

function App() {

  return (
    <>
      <div className='app'>
        <Router>
          <Navbar />
          <div className='body'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/product' element={<Product />} />
              <Route path='/product/:productId' element={<Productdetail />} />
              <Route path='/admin-dashboard' element={<Dashboard />} />
              <Route path='/cart' element={<Cart />}/>
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
