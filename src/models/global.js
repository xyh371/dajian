import { login, userInfo } from '../api/userServices'
import {routerRedux } from 'dva'
export default {
  namespace: 'global',
  state: {
    user: {},
    view_authority: []
  },
  subscriptions: {
    setup({dispatch, histoyt}) {
      histoyt.listen(() => {
        if () {
          
        }
        dispatch({ type: 'get_user_Info'})
      })
    }
  },
  reducers: {
    changeState (state, {payload}) {
      if (payload.token) {
        window.localStorage.setItem('token', payload.token)
      }
      return Object.assign({}, state, payload)
    }
  },
  effects: {
    *login({ user_name, user_pwd }, {call, apply, cps, put}) {
      const res = yield call(login, user_name, user_pwd)
      yield put({type: 'changeState', payload: {
        token: res.token
      }})
      return Promise.resolve()
    },

    *get_user_Info (action, { call, apply, select, put }) {
      const user = yield select(state => state.global.user) 
      if (Object.keys(user).length >= 1) {
        return
      }
      const info = yield call(userInfo)
      yield put({
        type: 'changeState', payload: {
          user: info.data
        }
      })
    },
    *login_out (action, { call, put }) {
      window.localStorage.removeItem('token')
    }
  }
}
