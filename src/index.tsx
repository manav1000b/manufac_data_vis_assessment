import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Loading from './components/shared/Loading';
const App = lazy(() => import(`./App`)); // webpack code splitting

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading id='root-loader' />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
