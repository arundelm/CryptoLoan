import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalProvider } from './providers/global-provider.tsx'
//import { config} from '../wagmi.config.ts'
import {config} from "./providers/web3-provider.tsx"
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ConnectKitProvider} from "connectkit"
const queryClient = new QueryClient();
import { ThemeProvider } from '@emotion/react'
import theme from './themes.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

<ThemeProvider theme={theme} > 
<WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <ConnectKitProvider>
            <App />
        </ConnectKitProvider>
        </GlobalProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
