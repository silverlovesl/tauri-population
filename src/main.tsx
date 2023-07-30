import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <StyleProvider hashPriority="high">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>
);
