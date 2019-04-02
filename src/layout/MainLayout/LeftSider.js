import React, { Component } from 'react';
import { Layout, Menu, Icon} from 'antd';
import {getMenu} from '../../router/router.config'
import {withRouter} from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider } = Layout;

@withRouter
class LeftSider extends Component {

  handleMenuChilk = ({item, key, keyPath}) => {
    this.props.history.push(key)
  }
  
  get defaultOpenKey () {
    const menu = getMenu()
    const pathname = this.props.location.pathname
    let openKey = ''
    menu.forEach((item) => {
      // console.log(item)
      if (item.subMenu.length >= 1) {
        item.subMenu.forEach((subItem) => {
          if (subItem.path === pathname) {
            openKey = subItem.meta.groupId
          }
        })
      }
    })
    return openKey
  }

  render() {
    const menu = getMenu()
    const defaultSelectedKey = this.props.location.pathname
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[defaultSelectedKey]}
          defaultOpenKeys={[this.defaultOpenKey]}
          style={{ height: '100%', borderRight: 0 }}
          onClick={this.handleMenuChilk}
        >
        {
          menu.map((item, index) => (
            <SubMenu key={item.groupId}
            title={<span><Icon type={item.groupIcon} />{item.groupName}</span>}>
              {
                  item.subMenu.map((subItem, subIndex) => {
                  return (
                    <Menu.Item key={subItem.path}>
                      {subItem.meta.title}
                    </Menu.Item>
                  )
                })
              }
            </SubMenu>
          ))
        }
        </Menu>
      </Sider>
    );
  }
}

export default LeftSider;