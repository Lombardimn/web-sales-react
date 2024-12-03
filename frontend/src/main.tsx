import { AppHookContainer } from '@/AppHookContainer'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>,
)