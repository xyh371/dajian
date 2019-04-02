import React, { Component } from 'react'
import Editor from 'for-editor';
import { connect } from 'react-redux'
class Marked extends Component {
  // 答案
  handleChange = (e) => {
    const { Title } = this.props
    Title(e)
  }

  render() {
    return (
      <div style={{ marginBottom: '20px' }}>
        <Editor onChange={this.handleChange} />
      </div>
    )
  }
}

const mapState = (state) => {
  return state.questions_answer
}
const mapDispatch = (dispatch) => {
  return {
    Title(payload) {
      dispatch({ type: 'QUESTINGS_ANSWER', payload })
    }
  }
}
export default connect(mapState, mapDispatch)(Marked);
