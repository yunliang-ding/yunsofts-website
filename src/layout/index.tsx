import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Sider } from 'component/index'
import './index.less'
@inject('UI')
@observer
class Layout extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    let menu = this.props.UI.menus.find(menu => {
      return menu.key === location.pathname
    })
    if(menu){
      this.props.UI.setMenuActive(menu.key)
    }
  }
  render() {
    const { loadMenu, menus } = this.props.UI
    return <div className='micro-app-layout'>
      <Sider />
      <div className='micro-app-layout-body'>
        {
          menus.filter(menu => {
            return loadMenu.indexOf(menu.key) > -1
          }).map(menu => {
            return <div className='micro-app-layout-body-iframe' key={menu.key} style={{
              display: menu.active ? 'block' : 'none'
            }}>
              <iframe src={menu.entry}></iframe>
            </div>
          })
        }
      </div>
    </div>
  }
}
export { Layout }