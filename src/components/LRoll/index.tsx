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
  constructor(props: LRollProps) {
    super(props);

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
    // 根据显示的条数乘每条的高度获取页面高度
    return this.state.showNum * 20
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
    const arr = Object.keys(this.state.obj)
    if (arr.length) {
      return arr.map((item: string) => {
        return this.state.obj[item](data[item])
      })
    }
    
    return Object.keys(data).map((item: any, index: number) => <span key={index}>{data[item]}</span>)

  }


  componentDidMount(): void {
    if (this.props.list) {
      this.setState({ list: this.props.list })
    }
    if (this.props.obj) {
      this.setState({ obj: this.props.obj })
    }


    if (this.props.children) {
      this.setState({ children: this.props.children })
    }

  }

  render() {
    const { list } = this.state
    let style = {
      width: 300, height: this.totalHeight(), "--height": "20px"
    }
    return (
      <div className='l-roll' style={style} onScroll={() => this.onscroll(event)}>
        <div className="l-roll-overflow" style={{ height: this.state.list.length * 20 }}></div>
        <div className="l-roll-msg" style={{ transform: `translateY(${this.state.start * 20}px)` }}>{this.showList().map((item: any, index: number) => {
          return <div className="item" key={index}>{this.dataHtml(item)}</div>
        })}</div>
      </div>
    )
  }
}