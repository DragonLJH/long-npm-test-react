
import * as React from "react";
// import { HelloWorld, LButton } from 'long-npm-test-react';
// import "long-npm-test-react/lib/main.min.css" 
import LGraphical from '../../components/LGraphical';
import { LGraphicalProps } from '../../components/LGraphical';




export default class LGraphicalPage extends React.Component {

    state = {
    }


    render() {

        return (
            <>
                <div>
                    GraphicalPage
                </div>
                <LGraphical />
            </>
        )
    }
}


