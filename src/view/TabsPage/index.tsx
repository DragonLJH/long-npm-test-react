
import * as React from "react";
// import { HelloWorld, LButton } from 'long-npm-test-react';
// import "long-npm-test-react/lib/main.min.css" 
import LTabs, { LTabsProps, TabItem } from '../../components/LTabs';

declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        path?: string
    }
}


export default class TabsPage extends React.Component {

    state = {
        tabs: [{ name: "登录", path: "path1" },
        { name: "注册", path: "path2" }],
        active: "path1",
    }


    render() {

        return (
            <>
                <div>
                    TabsPage
                </div>
                <LTabs tabs={this.state.tabs}>
                    <TabItem path="path1">
                        <div><input type="text" /></div>
                        <div><input type="text" /></div>
                    </TabItem>
                    <TabItem path="path2">path2</TabItem>
                </LTabs>
            </>
        )
    }
}


