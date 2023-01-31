import * as React from "react";
import './index.scss';

declare module 'react' {
  interface HTMLAttributes<T> extends LCardProps, DOMAttributes<T> {
  }
}

export interface LCardProps {
  width?: number
  height?: number
  boxshadow?: "default" | "never" | "alway"
  title?: React.ReactNode;
  left?: React.ReactNode;

  children?: React.ReactNode;
}


export default class LCard extends React.PureComponent<LCardProps> {
  constructor(props: LCardProps) {
    super(props);

  }
  state: LCardProps = {
    width: 300,
    height: 200,
    boxshadow: "default",
  } as LCardProps


  componentDidMount(): void {
    if (this.props.width) {
      this.setState({ width: this.props.width })
    }
    if (this.props.height) {
      this.setState({ height: this.props.height })
    }
    if (this.props.boxshadow) {
      this.setState({ boxshadow: this.props.boxshadow })
    }
    if (this.props.title) {
      this.setState({ title: this.props.title })
    }
    if (this.props.left) {
      this.setState({ left: this.props.left })
    }



    if (this.props.children) {
      this.setState({ children: this.props.children })
    }

  }

  render() {
    const { width, height, boxshadow, children, title, left } = this.state
    return (
      <div className='l-card' boxshadow={boxshadow} style={{ width: width, height: height }}>
        <div className='l-card-title' >
          {title}
        </div>
        <div className='l-card-main' >
          {left ?
            (<div className='l-card-main-left' >
              {left}
            </div>)
            : ""}

          <div className='l-card-main-right' >
            {children}
          </div>
        </div>
      </div>
    )
  }
} 