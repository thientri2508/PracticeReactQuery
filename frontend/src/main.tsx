import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './core/style//index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './core/store/index.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
     <Provider store={store}>
      <App />
    </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
