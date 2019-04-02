import React from 'react';
import { Router} from 'dva/router';
import routes from './router.config'
import RouterView from './RouterView.js'


export default ({history }) => {
  return (
    <Router history={ history }>
      <RouterView routes={routes} />
    </Router>
  )
}
