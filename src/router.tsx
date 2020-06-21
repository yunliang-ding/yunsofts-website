import * as React from 'react'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import { Layout } from './layout/index'
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Redirect from='/' to='/app/react-ryui' />
        <Route path={'*'} component={Layout} />
      </Router>
    )
  }
}
export { AppRouter }
