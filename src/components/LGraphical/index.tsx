import * as React from "react";
import './index.scss';

declare module 'react' {
  interface HTMLAttributes<T> extends LGraphicalProps, DOMAttributes<T> {
  }
}

export interface LGraphicalProps {

  children?: React.ReactNode;
}


export default class LGraphical extends React.PureComponent<LGraphicalProps> {
  constructor(props: LGraphicalProps) {
    super(props);

  }
  state = {
  } as LGraphicalProps


  componentDidMount(): void {


    if (this.props.children) {
      this.setState({ children: this.props.children })
    }

  }

  render() {
    const { } = this.state
    return (
      <div className='l-graphical' >

        <div className="eight-diagrams" >
          <div className="eight-diagrams-left"></div>
          <div className="eight-diagrams-right"></div>
        </div>
        <div className="rain">
          <div className="cloud">
            <div></div>
          </div>
          <div className="lower-rain"></div>
        </div>
      </div>
    )
  }
} 