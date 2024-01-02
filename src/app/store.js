import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';

let store = configureStore({
  reducer: rootReducer,
});

if (
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });
}

export { store };
