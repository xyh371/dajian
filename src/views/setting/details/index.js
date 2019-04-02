import React, { Component } from 'react';
import classNames from 'classname'
import echarts from 'echarts'
// import axios from 'axios'
import './style.less'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isShow: true
    }
  }
  componentDidMount () {
    const charts = echarts.init(this.refs.dom);
    const options = {
      title: {
        text: 'ECharts 入门示例'
      },
      color: ['#f00', '#0f0'],
      grid: {
        left: 30,
        right: 40
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          }
      },
      legend: {
        data: ['销量', '热销']
      },
      xAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ccc'
          },
        },
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {
        axisLine: {
          show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
      },
      series: [{
        name: '销量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      },{
        name: '热销',
        type: 'line',
        data: [50, 25, 30, 20, 15, 40]
      }]
    }
    charts.setOption(options, true)
  }
  render() {
    const { isHide } = this.props
    return (
      <div className={classNames({
        isShow: isHide
      })}>
        <div ref="dom" style={{width: '100%', height: 500}}>
        </div>
      </div>
    );
  }
}

export default Index;