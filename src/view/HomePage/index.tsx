
import * as React from "react";
// import { HelloWorld, LButton } from 'long-npm-test-react';
// import "long-npm-test-react/lib/main.min.css" 
import ButtonPage from '../ButtonPage';
import CardPage from '../CardPage';
import GraphicalPage from '../GraphicalPage';
import RollPage from '../RollPage';
import RotationPage from '../RotationPage';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";



export default class HomePage extends React.Component {

    state = {
    }


    render() {

        return (
            <>
                <Router>
                    <div>
                        <Link to="/button" >button</Link></div>
                    <div>
                        <Link to="/card" >card</Link></div>
                    <div>
                        <Link to="/graphical" >graphical</Link></div>
                    <div>
                        <Link to="/roll" >roll</Link></div>
                    <div>
                        <Link to="/rotation" >rotation</Link></div>
                    <Routes>
                        <Route path="button" element={<ButtonPage />} />
                        <Route path="card" element={<CardPage />} />
                        <Route path="graphical" element={<GraphicalPage />} />
                        <Route path="roll" element={<RollPage />} />
                        <Route path="rotation" element={<RotationPage />} />
                    </Routes>
                </Router>
            </>
        )
    }
}


