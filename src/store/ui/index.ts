import { observable, action } from 'mobx'
class UI {
  @observable loading = false
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
  @observable loadMenu = ['react-ryui']
  @observable menus = [{
    key: '/app/cloud-music',
    name: '云音乐',
    icon: 'icon-wangyiyunyinlezizhi-copy',
    entry: 'http://49.233.85.54:8002',
    active: false,
  },{
    key: '/app/react-ryui',
    name: '组件中心',
    icon: 'icon-zujian',
    entry: 'http://49.233.85.54:8003',
    active: true,
  },{
    key: '/app/cloud-record',
    name: '云事办',
    icon: 'icon-task-line',
    entry: 'http://49.233.85.54:8004',
    active: false,
  },{
    key: '/app/mock-ui',
    name: '原型设计',
    icon: 'icon-UI1',
    entry: 'http://49.233.85.54:8005',
    active: false,
  },{
    key: '/app/cloud-topic',
    name: '云习题',
    icon: 'icon-timu',
    entry: 'http://49.233.85.54:8006',
    active: false,
  }]
  @action setMenuActive = (key) => {
    this.loadMenu.push(key)
    this.menus.forEach(menu => {
      menu.active = menu.key === key
    })
  }
}
const ui = new UI()
export {
  ui
}