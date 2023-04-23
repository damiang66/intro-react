import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//const h1= React.createElement('h1',null,React.createElement('ul',null,React.createElement('li',null,"item 1")));
const ul = <div><ul><li>Hola mundo </li></ul></div>;
ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
 //   <App />
 // </React.StrictMode>,
 ul
)
