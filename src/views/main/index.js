import React, { Component } from 'react';
import MainLayout from '../../layout/MainLayout'
import RouterView from '../../router/RouterView'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: window.localStorage.getItem('token')
    }
  }
  componentDidMount() {
    if (!this.state.token) {
      this.props[0].history.push('/login')
    }
  }
  render() {
    return (
      <MainLayout>
        {this.state.token && <RouterView routes={this.props.childrenRoutes} />}
      </MainLayout>
    );
  }
}

export default Index;