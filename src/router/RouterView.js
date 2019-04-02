import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'dva/router';
class RouterView extends Component {
  render() {
    const { routes } = this.props
    return (
      <React.Fragment>
        <Switch>
          { 
            routes.map((item, index) => {
              const RouteComponent = item.component
              if (!item.redirect) {
                return (
                  <Route 
                  path={item.path}
                  key={index}
                  render={(...rest) => {
                    return (
                      <RouteComponent
                      {...rest}
                      {...this.props}
                      childrenRoutes={item.children}
                      />
                    )
                  }}
                  />
                )
              }
            })
          }
        </Switch>
        <Switch>
          <Route path="/" component={()=>{
            return <Redirect to="/main/home"></Redirect>
        }} exact/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default RouterView;