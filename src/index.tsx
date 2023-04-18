import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Loading from './components/shared/Loading';
const App = lazy(() => import(`./App`));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading id='root-loader' style={{ height: `100%`, width: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }} />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
