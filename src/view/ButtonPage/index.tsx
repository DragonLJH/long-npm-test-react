
import * as React from "react";
// import { HelloWorld, LButton } from 'long-npm-test-react';
// import "long-npm-test-react/lib/main.min.css" 
import LButton from '../../components/LButton';
import LCard from '../../components/LCard';
import { LButtonProps } from '../../components/LButton';




export default class ButtonPage extends React.Component {

    state = {
        buttonTypeArr: [
            { type: "", children: "default" },
            { type: "success" },
            { type: "fail", children: "fail" },
            { type: "information", children: "information" },
        ] as Array<LButtonProps>,

        buttonSizeArr: [
            { lsize: "maximum", children: "maximum" },
            { lsize: "large", children: "large" },
            { lsize: "default", children: "default" },
            { lsize: "small", children: "small" },
            { lsize: "minimum", children: "minimum" },
        ] as Array<LButtonProps>
    }


    render() {
        const { buttonTypeArr, buttonSizeArr } = this.state

        return (
            <>
                <div>
                    ButtonPage
                </div>
                <LCard width={1000}
                    left={
                        <>
                            {/* <div>{`import LButton from '../../components/LButton';`} </div>
                            <div>{`import {LButtonProps}  from '../../components/LButton';`}</div>
                            <div>{`state = {`}</div>
                            <div>{`buttonTypeArr: [`}</div>
                            <div>{`{ type: "", children: "default" },`}</div>
                            <div>{`{ type: "success" },`}</div>
                            <div>{`{ type: "fail", children: "fail" },`}</div>
                            <div>{`{ type: "information", children: "information" },`}</div>
                            <div>{`] as Array<LButtonProps>,`}</div> 
                            <div>{`}`}</div> 
                            <div>{``}</div>  */}
                        </>
                    }
                >
                    {buttonTypeArr.map((item: LButtonProps, index: number) => {
                        return <LButton key={index} type={item.type} lsize={item.lsize} shape={item.shape} >{item.children}</LButton>
                    })}
                </LCard>
                <LCard width={1000}>
                    {buttonSizeArr.map((item: LButtonProps, index: number) => {
                        return <LButton key={index} type={item.type} lsize={item.lsize} shape={item.shape} >{item.children}</LButton>
                    })}
                </LCard>



            </>
        )
    }
}


