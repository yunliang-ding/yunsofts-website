import { observable, action } from 'mobx'
class UI {
  @observable loading = false
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
  @observable menus = [{
    key: 'server1',
    name: 'server1',
    entry: 'http://49.233.85.54:8001',
    activeRule: '/workbench',
    active: true,
  },{
    key: 'server2',
    name: 'server2',
    entry: 'http://49.233.85.54:8002',
    activeRule: '/music',
    active: false,
  },{
    key: 'server3',
    name: 'server3',
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