require('./demo.css');

import React from 'react';
import ReactDOM from 'react-dom';

import TimeagoComponent from './timeagoComponent.jsx';

ReactDOM.render(<TimeagoComponent />,
  document.querySelector('#wrapper')
);
