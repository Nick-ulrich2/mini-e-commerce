import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PanierProvider } from './context/PanierContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Mettons en oeuvre le context API en enveloppant App dans PanierProvider */}
    <PanierProvider>
      <App />
    </PanierProvider>
  </StrictMode>,
)
