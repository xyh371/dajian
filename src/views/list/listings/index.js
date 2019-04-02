import React, { Component } from 'react';
// import Input from '../Input/index'
import Txt from '../txt'
import Styles from './Style.module.less'
class Index extends Component {
  render() {
    return (
      <div className={Styles.list}>
        <h3 className={Styles.top}>答案信息</h3>
        <Txt />
      </div>
    );
  }
}

export default Index;