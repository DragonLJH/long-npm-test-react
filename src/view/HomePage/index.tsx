
import * as React from "react";
// import { HelloWorld, LButton } from 'long-npm-test-react';
// import "long-npm-test-react/lib/main.min.css" 
import ButtonPage from '../ButtonPage';
import CardPage from '../CardPage';
import GraphicalPage from '../GraphicalPage';




export default class HomePage extends React.Component {

    state = {
    }


    render() {

        return (
            <>
                <div>
                    <ButtonPage />
                </div>
                <div>
                    <CardPage />
                </div>
                <div>
                    <GraphicalPage />
                </div>

            </>
        )
    }
}


