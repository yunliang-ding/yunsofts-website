import { observable, action } from 'mobx'
class UI {
  @observable loading = false
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
  @observable menus = [{
    key: 'server1',
    name: '我的工作台',
    entry: 'http://49.233.85.54:8001',
    activeRule: '/work#/home/development/yunsofts-website',
    active: true,
  },{
    key: 'server2',
    name: '我的音乐',
    entry: 'http://49.233.85.54:8002',
    activeRule: '/music',
    active: false,
  },{
    key: 'server3',
    name: '我的组件',
    entry: 'http://49.233.85.54:8003',
    activeRule: '/ryui',
    active: false,
  }]
  @action setMenuActive = (key) => {
    this.menus.forEach(menu => {
      menu.active = menu.key === key
    })
  }
}
const ui = new UI()
export {
  ui
}