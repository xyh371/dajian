import React, { Component } from 'react';
import Styles from '../style.module.less'
// import { connect } from 'react-redux'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    // fetch('/exam/subject',{
    //   method: 'GET',
    //   headers: {
    //     authorization: window.localStorage.getItem('token')
    //   }
    // }).then(res => res.json())
    //   .then(res => {
    //     if (res.code === 1) {
    //       this.setState({
    //         data: res.data

    //       })
    //     }
    //   })
  }
  // 给All 添加高亮 ，同时让其他的去掉高亮
  handleClick = (e) => {
    if (e.target.className === Styles.active) {
      e.target.className = ''
    } else {
      e.target.className = Styles.active
    }
    Array.from(e.target.parentNode.children).forEach((v ,i) => {
      if (v.nodeName === "SPAN") {
        v.className = ''
      }
    })
  }
  handleEvent = (e) => {
    if (e.target.className === Styles.active) {
      e.target.className = ''
    } else {
      e.target.className = Styles.active
    }
    e.target.parentNode.children[1].className = ''
    const subject_id = e.target.getAttribute('subject_id')
    //调用函数
    const { SUBJECT } = this.props
    SUBJECT(subject_id)
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <div className={Styles.list}>
          <b className={Styles.listDren}>课程类型:</b>
          <b onClick={this.handleClick}>All</b>
          {
            data.map && data.length ? data.map((item, index) => (
              <span key={index}
                subject_id={item.subject_id}
                onClick={this.handleEvent}
                ref="dom"
              >
                {item.subject_text}
              </span>
            )): null
        }
        </div>
      </div>
    );
  }
}
// const mapState = (state) => {
//   return state.reducer
// }
// const mapDispatch = (dispatch) => {
//   return {
//     SUBJECT (payload) {
//       dispatch({ type: 'SUBJECT_ID', payload})
//     }
//   }
// }
// export default connect(mapState, mapDispatch)(Index);
export default Index
