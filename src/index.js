import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Gilroy Medium

import './assets/gilroy-bold-cufonfonts/GilroyMediumFiles/gilroy-medium.woff2'
import './assets/gilroy-bold-cufonfonts/GilroyMediumFiles/gilroy-medium.woff'
import './assets/gilroy-bold-cufonfonts/GilroyMediumFiles/Gilroy-Medium.ttf'

// import './assets/gilroy-bold-cufonfonts/Gilroy-Heavy.ttf'
// import './assets/gilroy-bold-cufonfonts/Gilroy-Light.ttf'
// import './assets/gilroy-bold-cufonfonts/Gilroy-Medium.ttf'
// import './assets/gilroy-bold-cufonfonts/Gilroy-Regular.ttf'
// import './assets/gilroy-extrabold.otf'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
