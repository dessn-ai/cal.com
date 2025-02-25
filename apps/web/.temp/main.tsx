import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { routes } from './routes';
import Wrapper from './Wrapper';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Wrapper>
      <App routes={routes} />
    </Wrapper>
  </React.StrictMode>
);