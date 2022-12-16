import App from './App.js';
import Demo from './Demo.js';

const container = document.getElementById('react-app');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <Demo />
  </React.StrictMode>
);
