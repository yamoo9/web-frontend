import App from './App.js';
import Demo from './Demo.js';
var container = document.getElementById('react-app');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(React.StrictMode, null, React.createElement(App, null), React.createElement(Demo, null)));