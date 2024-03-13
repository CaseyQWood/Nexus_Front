import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider, theme  } from 'antd'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
    theme={{
      algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],

      token: {
        
        // Seed Token
        // colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
      },
    }}
  >
    <App />
  </ConfigProvider>
  </React.StrictMode>
)
