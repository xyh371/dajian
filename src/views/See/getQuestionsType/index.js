import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon} from 'antd';
// import { connect } from 'react-redux'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      type_text: ''
    }
  }
  componentDidMount() {
    // fetch('/exam/getQuestionsType', {
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
  handleMenuClick = (type_text, type_id) => {
    this.setState({
      type_text
    })
    const { TYPEID} = this.props
    TYPEID(type_id)
  }
  render() {
    const { data } = this.state
    const menu = (
      <Menu>
        {
          data.map && data.length ? data.map((item, index) => {
            return <Menu.Item onClick={() => this.handleMenuClick(item.questions_type_text, item.questions_type_id)} ref="dom" key={index}><Icon type="user" />{item.questions_type_text}</Menu.Item>
          }) : null
        }
      </Menu>
    );
    return (
      <div>
        <div>
          题目类型:<Dropdown overlay={menu}>
            <Button style={{ marginLeft: 18, width: 150}}>
              {this.state.type_text}<Icon type="down" />
            </Button>
          </Dropdown>
        </div>

      </div>
    );
  }
}

// const mapState = (state) => {
//   return state.question
// }
// const mapDispatch = (dispatch) => {
//   return {
//     TYPEID (payload) {
//       dispatch({ type: 'TYPE_ID', payload})
//     }
//   }
// }
// export default connect(mapState, mapDispatch)(index);
export default index