import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}
// const gH = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
// const isReact = typeof gH === "object";
// if (!isReact) {}

// for (let [key, value] of Object.entries(gH)) {
//   gH[key] = (typeof value === "function")
//     ? () => {}
//     : null;
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
