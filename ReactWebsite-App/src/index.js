
/*import App from './App'
import './style.css'

ReactDOM.render(<App/>, document.querySelector("#root"));
*/
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './style.css';
import { createRoot } from 'react-dom/client';

ReactDOM.createRoot(document.querySelector('root'))


const rootElement = document.querySelector('root');
const root = createRoot(rootElement); 


root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
