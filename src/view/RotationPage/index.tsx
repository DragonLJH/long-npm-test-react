
import * as React from "react";
// import { HelloWorld, LButton } from 'long-npm-test-react';
// import "long-npm-test-react/lib/main.min.css" 
import LRotation from '../../components/LRotation';
import { LRotationProps } from '../../components/LRotation';




export default class RotationPage extends React.Component {

    state = {
    }


    render() {

        return (
            <>
                <div>
                    RotationPage
                </div>
                <LRotation />
            </>
        )
    }
}


