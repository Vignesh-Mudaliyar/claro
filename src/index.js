import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={loading}>
    <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);