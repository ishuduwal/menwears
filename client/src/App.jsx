import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar/Navbar'
import { Signin } from './components/user/Signin';
import { Signup } from './components/user/Signup';
import { Product } from './components/product/Product';
import { Productdetail } from './components/product/Productdetail';
import { Dashboard } from './components/admin/Dashboard';
import { Home } from './components/home/Home';

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
              <Route path='/product-detail' element={<Productdetail />} />
              <Route path='/admin-dashboard' element={<Dashboard/>}/>
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
