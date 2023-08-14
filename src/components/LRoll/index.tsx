import * as React from "react";
import './index.scss';

declare module 'react' {
  interface HTMLAttributes<T> extends LRollProps, DOMAttributes<T> {
  }
}

export interface LRollProps {
  list?: Array<any>;
  showNum?: number;
  start?: number;
  end?: number;
  obj?: any;

  children?: React.ReactNode;
}


export default class LRoll extends React.PureComponent<LRollProps> {
  msgRef: any;
  constructor(props: LRollProps) {
    super(props);
    this.msgRef = React.createRef()

  }

  state = {
    list: [],
    showNum: 20,
    start: 0,
    end: 20,
    obj: {}

  } as LRollProps

  showList() {
    // 返回显示的条数
    return this.state.list.slice(this.state.start, this.state.end)
  }

  totalHeight() {
    let h = 1;
    // 获取第一条数据的高度
    if (this.msgRef.current) {
      if (this.msgRef.current.children[0]) {
        h = this.msgRef.current.children[0].clientHeight
      }
    }
    // 根据显示的条数乘每条的高度获取页面高度
    return this.state.showNum * h
  }

  onscroll(event: any) {
    // 获取滚动条距离头部的高度
    const { scrollTop }: { scrollTop: number } = event.target
    // 计算 滚动的条数
    let num = Math.round(scrollTop / 20)
    this.setState({ start: num })
    this.setState({ end: num + 20 })
    // 给滚动条距离头部的高度赋值（解决偏移超出或不够的问题）
    event.target.scrollTop = num * 20
  }

  dataHtml(data: any) {
    const arr: any = this.props.children
    let res: any;
    if (arr.length) {
      res = arr.map((element: any, index: number) => {
        let k = Object.keys(element.props).find(item => item.indexOf("data") != -1).split("-")[1]
        return <div {...element.props} key={index}>{data[k]}</div>
      });
    } else {
      res = <div {...arr.props}>{
        arr.props.children.map((element: any, index: number) => {
          let k = Object.keys(element.props).find(item => item.indexOf("data") != -1).split("-")[1]
          return <div {...element.props} key={index}>{data[k]}</div>
        })
      }</div>
    }


    return <>{res}</>
  }


  componentDidMount(): void {
    if (this.props.list) {
      this.setState({ list: this.props.list })
    }
    if (this.props.obj) {
      this.setState({ obj: this.props.obj })
    }
    if (this.props.showNum) {
      this.setState({ showNum: this.props.showNum })
    }


    if (this.props.children) {
      this.setState({ children: this.props.children })
    }

  }

  render() {
    const { list } = this.state
    let style = {
      width: 300, height: this.totalHeight()
    }
    return (
      <div className='l-roll' style={style} onScroll={() => this.onscroll(event)}>
        <div className="l-roll-overflow" style={{ height: this.state.list.length * 20 }}></div>
        <div ref={this.msgRef} className="l-roll-msg" style={{ transform: `translateY(${this.state.start * 20}px)` }}>{this.showList().map((item: any, index: number) => {
          return <div className="item" key={index}>{this.dataHtml(item)}</div>
        })}</div>
      </div>
    )
  }
}