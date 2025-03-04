import './demo.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import TimeagoComponent from './timeagoComponent';

createRoot(document.querySelector('#wrapper')!).render(<TimeagoComponent />);
