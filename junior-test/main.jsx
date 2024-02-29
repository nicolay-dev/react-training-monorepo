import { createRoot } from 'react-dom/client'
import './style.css'
import { App } from './App'
import React from 'react'

const root = createRoot(document.getElementById('app'))

root.render(
  <>
    <App />
  </>
)
