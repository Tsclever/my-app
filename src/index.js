import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hw from './Hw';
import Avatar from './Avatar';
import TodList from './TodList';
import Photo from './MyFirstComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Hw />
    <Photo />
    <Photo />
    {/* <App /> */}
    <TodList />
    <Avatar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
