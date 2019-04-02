/*
 * @Author: xuyahui 
 * @Date: 2019-03-15 21:10:23 
 * @Last Modified by: xyahui
 * @Last Modified time: 2019-03-20 20:40:03
 * 
 * 题干
 */
import React, { Component } from 'react';
import { Input } from 'antd';
// import { connect } from 'react-redux'
import Styles from './style.module.less'
class Index extends Component {
  handleChange = (e) => {
    let val = e.target.value
    const { QUESTIONS_STEM } = this.props;
    QUESTIONS_STEM(val)
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <span className={Styles.txt}>题干:</span>
        <div className="example-input" style={{width: 368, height: 28}}>
          <Input size="small" placeholder="small size" onChange={this.handleChange } />
        </div>
        <span className={Styles.title}></span>
      </div>
    );
  }
}

// const mapState = (state) => {
//   return state.questions_stem
// }
// const mapDispatch = (dispatch) => {
//   return {
//     QUESTIONS_STEM(payload) {
//       dispatch({ type: 'QUESTIONS_STEM', payload })
//     }
//   }
// }
// export default connect(mapState, mapDispatch)(Index);

export default Index