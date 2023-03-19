import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'react-avatar';
import { theme } from './components/theme';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ConfigProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/goit-react-hw-08-phonebook">
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);
