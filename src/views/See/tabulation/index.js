import React, { Component } from 'react';
import Style from './index.module.less'
// import classNames from 'classname'
import './index.css'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  
  handleClick = (flex) => {
    this.setState({
      data: flex
    })
  }
  render() {
    const { data } = this.props
    console.log(this.props)
    return (
      <div>
        <div onClick={this.props.hand }
        >
          {
            data.map && data.length ? data.map((item, index) => {
              console.log(item)
              return <div key={index} className={Style.box}
                onClick={() => this.handleClick(item)}>
                <span className={Style.title}>{item.questions_answer}</span>
                <div className={Style.bottonlist}>
                  <span>{item.subject_text}</span>
                  <span>{item.questions_type_text}</span>
                  <span>{item.exam_name}</span>
                </div>
              </div>
            }) : null
          }
        </div>
      </div>
    );
  }
}

export default Index;