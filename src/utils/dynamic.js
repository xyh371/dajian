import React, {Component} from "react";

export default function Loadable({
  loader,
  loading = React.Component,
  ErrorComponent = '',
  delay = 20000
}) {
  let prevLoadedComponent = null;
  let LoadingComponent = loading;

  return class Loadable extends Component {
    state = {
      isLoading: false,
      error: null,
      Component: prevLoadedComponent
    };

    componentWillMount() {
      if (!this.state.Component) {
        this.loadComponent();
      }
    }

    loadComponent() {
      // Loading占位
      this._timeoutId = setTimeout(() => {
        this._timeoutId = null;
        this.setState({ isLoading: true });
      }, this.props.delay);
      // 进行加载
      loader().then(Component => {
        this.clearTimeout();
        prevLoadedComponent = Component.default;
        this.setState({
          isLoading: false,
          Component: Component.default
        });
      })
      .catch(error => {
        this.clearTimeout();
        this.setState({
          isLoading: false,
          error
        });
      });
    }

    clearTimeout() {
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
      }
    }

    render() {
      let { isLoading, Component } = this.state;
      // 根据情况渲染Loading 所需组件 以及 错误组件
      if (isLoading) {
        return <LoadingComponent />;
      } else if (Component) {
        return <Component {...this.props} />;
      }
      return '';
    }
  };
}