import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// обычный синтаксис
// const elem = <h2>Hello, World!</h2>

// альтернативный синтаксис:
// const elem = React.createElement('h2', { className: 'greetings' }, 'Hello, World!')

const text = 'Hello, World!'
const elem = (
  <div>
    <h2 className='text'>Text: {text}</h2>
    {/* Объекты всталять нельзя: */}
    {/* <h2>{new Date}</h2> */}
    <input type="text" />
    <button>Click!</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);


