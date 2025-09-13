import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/common/Loader.jsx'
import NavbarContext from './context/NavbarContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Loader>
        <NavbarContext>
          <App />
        </NavbarContext>
      </Loader>
    </BrowserRouter>
  </StrictMode>,
)
