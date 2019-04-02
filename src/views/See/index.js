import React, { Component } from 'react';
import ExamType from './examType'
import GetQuestionsType from './getQuestionsType'
import List from './list'
// import Fetch from '../../utils/fetch'
import Styles from './style.module.less'
// import { connect } from 'react-redux'
import { Button } from 'antd';
import BatuLation from './tabulation/'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions_type_id: '',
      exam_id: '',
      subject_id: '',
      data: [],
      flag: true,
      isHide: false
    }
  }
  
  handleClick = () => {
    const { initial, question, reducer } = this.props
    //判断如果不为空， 就请求数据
    if (initial.exam_id && question.questions_type_id && reducer.subject_id) {
      // Fetch.get('/exam/questions/condition', {
      //   exam_id: initial.exam_id,
      //   questions_type_id: question.questions_type_id,
      //   subject_id: reducer.subject_id
      // }, {
      //     authorization: window.localStorage.getItem('token')
      //   }).then(res => {
      //     // alert(res.msg)
      //     this.setState({
      //       data: res.data
      //     })
      //   })
    }
  }
  render() {
    return (
      <div className={Styles.box} >
        <div className="list">
          <List />
        </div>
        <div className={Styles.search}>
          <ExamType />
          <GetQuestionsType />
          <Button type="primary" 
          icon="search"
          className={Styles.Color}
          onClick={this.handleClick}>搜索</Button>
        </div>
        <BatuLation data={this.state.data} />
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