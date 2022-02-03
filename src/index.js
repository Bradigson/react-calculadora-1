import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import App from './App';

function time(){

const eleement = (
  <div className="clock">
    <h1 className="clock-h1">{new Date().toLocaleTimeString()}</h1>

  </div>
)

ReactDOM.render(
  <React.StrictMode>
    {eleement}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

}
setInterval(time, 1000)