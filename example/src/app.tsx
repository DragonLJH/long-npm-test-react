/*** examples/src/app.js ***/
import * as React from "react";
import { render } from 'react-dom'
// import ReactDemo from '../../src' // 引入组件
// import { HelloWorld, LButton } from '../../src/index';
import HomePage from '../../src/view/HomePage';

const App = () => {
    return (<>
        <div>App</div>
        <HomePage />
    </>)
}
render(<App />, document.getElementById('root'))