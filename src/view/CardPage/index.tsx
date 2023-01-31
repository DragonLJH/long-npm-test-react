
import * as React from "react";
// import { HelloWorld, LButton } from 'long-npm-test-react';
// import "long-npm-test-react/lib/main.min.css" 
import LCard from '../../components/LCard';
import { LCardProps } from '../../components/LCard';




export default class CardPage extends React.Component {

    state = {
    }


    render() {

        return (
            <>
                <div>
                    CardPage
                </div>
                <LCard width={1000} height={300} left={123} ></LCard>
            </>
        )
    }
}


