import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {imageData}  from './components/Datacomponents';
import AppClass from './AppClass';
// import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App imageData={imageData}/>   
   <AppClass imageArr={imageData}/>
);
