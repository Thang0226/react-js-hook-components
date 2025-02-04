import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Timer from './components/Timer';
import reportWebVitals from './reportWebVitals';
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Timer />
    <>
        <Counter1/>
        <Counter2/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
