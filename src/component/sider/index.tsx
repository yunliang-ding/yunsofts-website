import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Tooltip } from 'react-ryui'
import { browserHistory } from 'react-router'
import './index.less'
@inject('UI')
@observer
class Sider extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const { menus, setMenuActive } = this.props.UI
    return <div className='micro-app-sider'>
      {
        menus.map(menu => {
          return <div
            key={menu.key}
            className={menu.active ? 'micro-app-sider-menu-active' : 'micro-app-sider-menu'}
            onClick={
              () => {
                setMenuActive(menu.key)
                browserHistory.push(menu.key)
              }
            }
          >
            {
              <Tooltip
                dark
                title={<span>{menu.name}</span>}
                placement='right'
              >
                <i className={'iconfont ' + menu.icon}></i>
              </Tooltip>
            }
          </div>
        })
      }
    </div>
  }
}
export { Sider }