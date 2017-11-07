import React from 'react';
import {render} from 'react-dom';
import Text from '../component/component.js';

let app = document.getElementById('app');
console.log(app);
app.innerHTML = 'nohaonma!';

render(<Text />,app);
