
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from './components/Navigation/Navbar';
import FullScreenNav from './components/Navigation/FullScreenNav';

const App = () => {

  return (
    <div className=''>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>

  )
}

export default App