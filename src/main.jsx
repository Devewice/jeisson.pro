import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import MotionProvider from './components/MotionProvider.jsx'
import App from './App.jsx'
import './index.css'
import './styles/design-system.css'
import './styles/pages.css'
import './styles/portfolio.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MotionProvider>
          <App />
        </MotionProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
