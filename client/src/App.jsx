import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar/Navbar'
import { Signin } from './components/user/Signin';
import { Signup } from './components/user/Signup';

function App() {

  return (
    <>
      <div className='app'>
        <Router>
          <Navbar />
          <div className='body'>
            <Routes>
              <Route path='/login' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
