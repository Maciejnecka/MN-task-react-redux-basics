import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import { store } from './app/store';
import { Reset } from 'styled-reset';
import GlobalFonts from './styles/fonts';
import GlobalStyles from './styles/Global';

const root = createRoot(document.querySelector('#root'));
root.render(
  <>
    <Reset />
    <GlobalFonts />
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
