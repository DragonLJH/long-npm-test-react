import * as React from "react";
import './index.scss';

declare module 'react' {
  interface HTMLAttributes<T> extends LRotationProps, DOMAttributes<T> {
  }
}

export interface LRotationProps {
  imgArr?: Array<string>;
  children?: React.ReactNode;
}


export default class LRotation extends React.PureComponent<LRotationProps> {
  constructor(props: LRotationProps) {
    super(props);

  }
  state = {
    imgArr: []
  } as LRotationProps

  getRandomImg() {
    return "http://dummyimage.com/200x200/" + Math.random().toString(16).slice(2, 8)
  }


  componentDidMount(): void {
    const imgList = new Array(4).fill("http://dummyimage.com/200x200/").map((item) => {
      return item + Math.random().toString(16).slice(2, 8)
    })
    this.setState({ imgArr: imgList })

    console.log("imgArr", imgList)

    if (this.props.children) {
      this.setState({ children: this.props.children })
    }

  }

  render() {
    const { imgArr } = this.state
    return (
      <div className='l-rotation' >
        <div className="l-rotation-img" style={{ transform: "translateZ(100px)" }}><img src={this.getRandomImg()} /></div>
        <div className="l-rotation-img" style={{ transform: "translateZ(100px) rotateY(90deg)" }}><img src={this.getRandomImg()} /></div>
        <div className="l-rotation-img" style={{ transform: "translateZ(-100px)" }}><img src={this.getRandomImg()} /></div>
        {/* <div className="l-rotation-img" style={{ transform: "translateX(200px),rotateY(-90deg)" }}><img src={this.getRandomImg()} /></div> */}
        {/* {imgArr.map((item: string, index: number) => {
          let style = { transform: "" }
          if (index % 2) {
            style.transform = `rotateY(${index * 90}deg)`
          } else {
            style.transform = `translateZ(${index % 2 * 200}px)`
          }
          console.log("imgArr", style)
          return <div className="l-rotation-img" style={style}><img src={item} /></div>
        })} */}
      </div>
    )
  }
} 