import * as React from "react";
import './index.scss';


declare module 'react' {
  interface HTMLAttributes<T> extends LButtonProps, DOMAttributes<T> {
  }
}



export interface LButtonProps {
  type?: "success" | "fail" | "information" | "default"
  lsize?: "maximum" | "large" | "default" | "small" | "minimum"

  shape?: "circle"

  children?: React.ReactNode;
}




export default class LButton extends React.PureComponent<LButtonProps, any>{
  constructor(props: LButtonProps) {
    super(props);

  }
  state = {
    type: "default",
    lsize: "default",
    children: "children",
    shape: undefined,
  } as LButtonProps

  componentDidMount(): void {

    if (this.props.type) {
      this.setState({ type: this.props.type })
    }
    if (this.props.shape) {
      this.setState({ shape: this.props.shape })
    }
    if (this.props.lsize) {
      this.setState({ lsize: this.props.lsize })
    }
    if (this.props.children) {
      this.setState({ children: this.props.children })
    }


  }

  render() {
    const { type, lsize, children, shape } = this.state
    return (
      <div className='l-button' type={type} lsize={lsize} shape={shape}>
        {children}
      </div>
    )
  }
} 