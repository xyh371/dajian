import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'dva'
import { Menu, Dropdown, Button, Layout, Avatar } from 'antd';
import Styles from './style.module.less'
const { Header } = Layout;

const mapState = (state) => {
  return {
    user: state.global.user
  }
}
@connect(mapState)
class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      user_name: ''
    }
  }
  handleClick () {
    window.localStorage.removeItem('token')
  }
  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      fetch('/user/userInfo', {
      method: 'GET',
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    }).then(res => res.json())
      .then(res => {
        if (res.code === 1) {
          this.setState({
            user_name: res.data.user_name
          })
          // const { User_id  } = this.props
          // User_id(res.data.user_id)
        }
      })
    }
    
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <div onClick={this.handleClick}>
            <Link to='/login'>退出登录</Link>
          </div>
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className="header" style={{ background:'#fff'}}>
        <div className="logo" />
        <div className={Styles.right}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>{this.state.user_name ? this.state.user_name : '请登录'}</Button>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
// const mapState = (state) => {
//   return state.user_id
// }
// const mapDispatch = (dispatch) => {
//   return {
//     User_id(payload) {
//       dispatch({ type: 'USER_ID', payload })
//     }
//   }
// }
// export default connect(mapState, mapDispatch)(HeaderBar);

export default HeaderBar