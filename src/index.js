import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// First Initialise Neutralino.
window.Neutralino.init();
// Now you can use neutralino APIs any where in your code.

// Render The App.
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
