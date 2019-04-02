import React, { Component } from 'react';
import axios from 'axios'
import classNames from 'classname'
import Details from './details'
import Styles from './style.module.less'
import './details/style.less'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data: [],
      isShow: false,
      isHide: true,
      childrens: []
    }
  }
  componentDidMount () {
    this.postList()
  }
  postList () {
    axios.post('/Add').then(res => {
      this.setState({
        data: res.data.datalist.data.data
      })
    }).catch(err => {
      console.log(err)
    })
  }
  handleClick = (item, index) => {
    this.setState({
      isShow: true,
      isHide: false,
      childrens: item
    }) 
  }
  render() {
    const { data,isShow } = this.state
    console.log()
    return (
      <div>
        <div className={classNames({
          isShow: isShow
        })}>
          {
            data.map && data.length ? data.map((item, index) => {
              return <div className={Styles.box} key={index}
                onClick={() => this.handleClick(item, index)}
              >
                <img src={item.avatar_thumb.url} alt="" />
                <div>
                  <span className={Styles.box_span}>{item.nickname}</span>
                  <p>抖音号:{item.unique_id}</p>
                  <b>简介:{item.signature}</b>
                  <div>
                    <span>{item.province}{item.city}</span>
                  </div>
                  <b>{item.custom_verify}</b>
                </div>
              </div>
            }) : null
          }
        </div>
        <Details isHide={this.state.isHide} childrens={this.state.childrens} />
      </div>
    );
  }
}

export default Index;