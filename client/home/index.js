/**************************************************
 File: index.js
 Name: HelloBoxy
 Explain: HelloBoxy
****************************************By QQBoxy*/
/*jshint node: true, esversion: 6 */
'use strict';
require("./index.scss");
require("../common/common.js");

import React from 'react';
import ReactDOM from 'react-dom';
import Boxy from './components/Boxy';

ReactDOM.render(
  <Boxy />,
  document.getElementById('app')
);
