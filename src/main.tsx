import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { MobileContextProvider } from './Contexts/MobileContext';

ReactDOM.render(
  <StrictMode>
    <MobileContextProvider>
      <App />
    </MobileContextProvider>
  </StrictMode>,
  document.getElementById('root'),
);
