/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
// import ReactDemo from '../../src' // 引入组件
import ReactDemo from 'long-npm-test-react';
import 'long-npm-test-react/lib/main.min.css'; 

const App = () => <ReactDemo />
render(<App />, document.getElementById('root'))