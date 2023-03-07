import * as React from "react";
import './index.scss';

declare module 'react' {
  interface HTMLAttributes<T> extends LInputProps, DOMAttributes<T> {
  }
}

export interface LInputProps {

  children?: React.ReactNode;
}


export default class LInput extends React.PureComponent<LInputProps> {
  constructor(props: LInputProps) {
    super(props);

  }
  state = {
  } as LInputProps


  componentDidMount(): void {


    if (this.props.children) {
      this.setState({ children: this.props.children })
    }

  }

  render() {
    const { } = this.state
    return (
      <div className='l-input' >
          Linput
      </div>
    )
  }
} 