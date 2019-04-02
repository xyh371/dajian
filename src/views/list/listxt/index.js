import React, { Component } from 'react'
import Editor from 'for-editor';
// import { connect } from 'react-redux'
class Marked extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  // 答案
  handleChange = (e) => {
    const { Title} = this.props
    // console.log(this.props)
    Title(e)
  }
  render() {
    return (
      <div >
        <div >{this.props.context}</div>
        <Editor onChange={this.handleChange}
        />
      </div>
    )
  }
}
// 试题标题
// const mapState = (state) => {
//   return state.Title_id
// }
// const mapDispatch = (dispatch) => {
//   return {
//     Title (payload) {
//       dispatch({ type: 'TITLE', payload })
//     }
//   }
// }
// export default connect(mapState, mapDispatch)(Marked);
export default Marked
