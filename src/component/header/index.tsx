import * as React from "react"
import { observer, inject } from 'mobx-react'
import { browserHistory } from 'react-router'
import { loadMicroApp } from 'qiankun';
import './index.less'
@inject('UI')
@observer
class Header extends React.Component<any, any> {
  props: any
  state: any
  constructor(props) {
    super(props)
    this.state = {
      history: {}
    }
  }
  render() {
    return <div className='micro-app-header'>
      <div className='micro-app-header-left'>
        <i className={'iconfont icon-langchaoyun'}></i>
        <span>微应用平台</span>
      </div>
      <div className='micro-app-header-right'>
        {
          this.props.UI.menus.map(menu => {
            return <div
              key={menu.key}
              className={menu.active ? 'app-header-item  app-header-item-active' : 'app-header-item'}
              onClick={
                () => {
                  this.props.UI.setMenuActive(menu.key)
                  browserHistory.push(menu.activeRule)
                  if(this.state.history[menu.key]){ // 不再重新加载
                    return
                  } else {
                    this.state.history[menu.key] = menu.entry
                    loadMicroApp(
                      { 
                        name: menu.name, 
                        entry: menu.entry,
                        container: `#${menu.key}`, 
                      }
                    )
                  }
                }
              }
            >
              {menu.name}
            </div>
          })
        }
      </div>
    </div>
  }
}
export { Header }