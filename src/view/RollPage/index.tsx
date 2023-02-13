
import * as React from "react";
// import { HelloWorld, LButton } from 'long-npm-test-react';
// import "long-npm-test-react/lib/main.min.css" 
import LRoll from '../../components/LRoll';
import { LRollProps } from '../../components/LRoll';




export default class RollPage extends React.Component {

    state = {
    }


    render() {
        const list = new Array(100000).fill(null).map((_: null, index: number) => { return { name: `name${index + 1}`, msg: `msg${index + 1}` } })
        const obj = { name: (data: string) => <h1>{data}</h1>, msg: (data: string) => <h2>{data}</h2> }
        return (
            <>
                <div>
                    RollPage
                </div>
                <LRoll list={list} showNum={10} />
            </>
        )
    }
}


