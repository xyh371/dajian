import React, { Component } from 'react';
import Input from '../Input/index'
import Txt from '../listxt'
import Styles from './Style.module.less'
class Index extends Component {
  render() {
    return (
      <div className={Styles.list}>
        <h3>题目信息</h3>
        <Input />
        <span>题目主题:</span>
        <Txt />
      </div>
    );
  }
}

export default Index;