
import * as React from "react";
// import { HelloWorld, LButton } from 'long-npm-test-react';
// import "long-npm-test-react/lib/main.min.css"
import HelloWorld from '../../components/HelloWorld';
import LButton from '../../components/LButton';




export default class HomePage extends React.Component {

    state = {
        buttonArr: ["success", "fail", "information", "default"]
    }


    render() {
        const { buttonArr } = this.state

        return (
            <>
                <div>HomePage</div>
                {buttonArr.map((item: any, index: number) => {
                    return <LButton key={index} type={item} >{item + index}</LButton>
                })}


            </>
        )
    }
}


