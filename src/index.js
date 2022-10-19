import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import PlayButton from './PlayButton';
import UploadButton from './UploadButton';
import Toolbar from './ToolBar';
import Signup from './Signup';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PlayButton movieName="Kiki's Delivery Service" />
    <UploadButton />
    <br />
    <Button onWhatEver={() => { alert('hi') }}>Show hi</Button>
    <br />
    <Toolbar />
    <Signup />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
