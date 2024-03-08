import { createRoot } from 'react-dom/client'
import { App } from './App'
import { FiltersProvider } from './src/context/FiltersContext'
import React from 'react'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
)
