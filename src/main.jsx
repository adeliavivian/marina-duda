import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ataque from './components/Ataque.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ataque />
  </StrictMode>,
)
