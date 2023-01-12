import * as React from "react";
import './index.css'; 


export default class HelloWorld extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">hello world</div>
    )
  }
} 