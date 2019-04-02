import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon} from 'antd';
// import {connect} from 'react-redux'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      exam_name: ''
    }
  }
  componentDidMount() {
    // fetch('/exam/examType', {
    //   method: 'GET',
    //   headers: {
    //     authorization: window.localStorage.getItem('token')
    //   },
    //   mode: 'cors'
    // }).then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       data: data.data
    //     })
    //   })
  }
  handleMenuClick = (exam_name, exam_id) => {
    this.setState({
      exam_name
    })
    const { EXAMID } = this.props;
    EXAMID(exam_id)
  }
  render() {
    const { data } = this.state
    const menu = (
      <Menu>
        {
          data.map && data.length ? data.map((item, index) => {
            return <Menu.Item onClick={() => this.handleMenuClick(item.exam_name, item.exam_id)} ref="dom" key={index}><Icon type="user" />{item.exam_name}</Menu.Item>
          }) : null
        }
      </Menu>
    );
    return (
      <div>
        <div>
          考试类型:<Dropdown overlay={menu}>
            <Button style={{ marginLeft: 18, width: 150}}>
              {this.state.exam_name}<Icon type="down" />
            </Button>
          </Dropdown>
        </div>

      </div>
    );
  }
}
// const mapState = (state) => {
//   return state.initial
// }
// const mapDispatch = (dispatch) => {
//   return {
//     EXAMID (payload) {
//       dispatch({type: 'EXAM_ID', payload})
//     }
//   }
// }
// export default connect(mapState, mapDispatch)(index);
export default index