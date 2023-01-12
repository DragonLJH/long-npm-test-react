import * as React from "react";
import './index.scss';


declare module 'react' {
  interface HTMLAttributes<T> extends LButtonProps, DOMAttributes<T> {
  }
}



export interface LButtonProps {
  type?: "success" | "fail" | "information" | "default"
  children?: React.ReactElement | string | number

}




export default class LButton extends React.PureComponent<LButtonProps, any>{
  constructor(props: LButtonProps) {
    super(props);

  }
  state = {
    type: "default",
    children: "default"
  } as LButtonProps

  componentDidMount(): void {
    if (this.props.type) {
      this.setState({ type: this.props.type })
    }
    this.setState({ children: this.props.children })
  }

  render() {
    const { type, children } = this.state
    return (
      <div className='l-button' type={type}> {children} </div>
    )
  }
} 