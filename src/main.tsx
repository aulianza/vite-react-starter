import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/global.css';
import Layout from './components/layouts/Layout.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout type='responsive'>
      <App />
    </Layout>
  </React.StrictMode>
);
