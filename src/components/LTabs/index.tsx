import * as React from "react";
import './index.scss';

declare module 'react' {
  interface HTMLAttributes<T> extends LTabsProps, DOMAttributes<T> {
  }
}

// 标签页控制显示页面，共享数据
const ThemeContext = React.createContext("");


type tabProps = {
  name: string;
  path: string;


}

export interface LTabsProps {
  tabs?: Array<tabProps>;
  active?: string;
  width?: number;
  height?: number;
  itemHeight?: number;

  children?: React.ReactNode;
}


/**
 *@param tabs  参数类型：Array ==> tabs = [{ name: "xxx", path: "xxx" }]，name：标签名，path：路径
 *@param active 参数类型：string ==> "xxx" active = "xxx"，active 显示路径
 *@param width 组件宽度
 *@param height 组件高度
 *@param itemHeight 组件标签高度
 * 
 */
export default class LTabs extends React.PureComponent<LTabsProps> {
  constructor(props: LTabsProps) {
    super(props);

  }


  state = {
    tabs: [],
    active: "",
    width: 300,
    height: 300,
    itemHeight: 30,
  } as LTabsProps


  componentDidMount(): void {
    if (this.props.width) {
      this.setState({ width: this.props.width })
    }
    if (this.props.height) {
      this.setState({ tabs: this.props.height })
    }
    if (this.props.itemHeight) {
      this.setState({ itemHeight: this.props.itemHeight })
    }
    if (this.props.tabs) {
      this.setState({ tabs: this.props.tabs })
    }
    if (this.props.active) {
      this.setState({ active: this.props.active })
    } else {
      let active = this.props.tabs[0].path
      this.setState({ active: active })
    }

    // if (this.props.children) {
    //   this.setState({ children: this.props.children })
    // }

  }


  tabClick(path: string, num: number) {
    this.setState({ active: path })
    console.log("path", path)
  }

  render() {
    const { tabs, active, width, height, itemHeight } = this.state
    let style = {
      width: width + "px", height: height+ "px", "--itemHeight": itemHeight+ "px"
    }
    return (
      <ThemeContext.Provider value={active}>
        <div className='l-tabs' style={style}>
          <div className='l-tabs-top'>
            {tabs.map((item: tabProps, index: number) => {
              return <div onClick={() => this.tabClick(item.path, index)} key={index} className={`item ${active === item.path ? "active" : ""}`}>{item.name}</div>
            })}
          </div>
          <div className='l-tabs-main' >
            {this.props.children}
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}


// 子组件
export interface TabItemProps {
  path?: string

  children?: React.ReactNode;
}

export class TabItem extends React.PureComponent<TabItemProps> {
  constructor(props: any) {
    super(props);
  }
  static contextType = ThemeContext;
  render() {
    return (
      <>
        {this.context === this.props.path ? <div path={this.props.path} className="tab-item">{this.props.children}</div> : ""}
      </>
    )
  }
}