import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import App from './App.jsx'
import './index.css'
import './styles/site.css'
import './styles/portfolio.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
