import React, { Component } from 'react';
import ListIng from './listing'
import ListIngs from './listings'
// import Fetch from '../../utils/fetch'
import ExamType from '../See/examType'
import GetQuestionsType from '../See/getQuestionsType'
// import { connect } from 'react-redux'
import Style from './index.module.less'
import { Button } from 'antd';
class Index extends Component {
  //  请求 接口传递参数
  handleClick = () => {
    console.log(this.props.reducer)
    const {
      reducer, initial, question, user_id, questions_stem, Title_id, questions_answer
    } = this.props
    console.log(reducer)
    let data = {
      exam_id: initial.exam_id,
      questions_type_id: question.questions_type_id,
      questions_stem: questions_stem.questions_stem,
      title: Title_id.title,
      questions_answer: questions_answer.questions_answer,
      user_id: user_id.user_id,
      subject_id: 'wrwgn-laqd1q'
    }
    fetch('/exam/questions', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        authorization: window.localStorage.getItem('token'),
        'Content-Type': 'application/json; charset=UTF-8'
      },
      credentials: 'include',// 允许cookie
      mode: 'cors', // 运行cors跨域访问
    }).then(res => res.json()).then(res => {
      alert(res.msg)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>
        <ListIng />
        <GetQuestionsType />
        <div className={Style.ExamType}>
          <ExamType />
        </div>
        <ListIngs />
        <Button type="primary"
          className={Style.Color}
          onClick={this.handleClick}>提交</Button>
      </div>
    );
  }
}

// const mapState = (state) => {
//   return state
// }
// const mapDispatch = (dispatch) => {
//   return {
//   }
// }
// export default connect(mapState, mapDispatch)(Index);

export default Index