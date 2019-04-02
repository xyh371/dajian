import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import Styles from './Styles.module.less'
import {connect } from 'dva'
const mapState = (state) => {
  return state.global
}
@Form.create()
@connect(mapState)
class Index extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({ type: 'global/login', ...values}).then(() => {
          this.props[0].history.push({
            pathname: '/main/home'
          })
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={Styles.wrap}>
        <div>
          <img src="https://gw.alipayobjects.com/zos/rmsportal/kimXVLnrAfnjvSNrjgVJ.png" alt=""/>
        </div>
        <div className={Styles.right}>
          <div>
            <Form onSubmit={this.handleSubmit} className="login-form" >
              <Form.Item>
                {getFieldDecorator('user_name', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('user_pwd', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;