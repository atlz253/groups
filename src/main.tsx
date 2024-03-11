import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import dataGateway from './dataGateway/dataGateway.ts'
import mockGateway from './dataGateway/mockGateway/mockGateway.ts'

dataGateway.setGateway(new mockGateway(1000));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
