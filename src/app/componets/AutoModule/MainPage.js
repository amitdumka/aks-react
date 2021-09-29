import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../../../_aks/layout";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title, values: props };
  }
  render() {
    console.log(this.props.ComponentList);
    return (
      <>
        <Suspense fallback={<LayoutSplashScreen />}>
          <Switch>
            {
              <Redirect
                exact={true}
                from={this.props.BasePath}
                to={this.props.DefaultPath}
              />
            }
            {this.props.ComponentList &&
              this.props.ComponentList.map((item) => (
                <>
                  <ContentRoute
                    key={this.props.BasePath + item.path}
                    path={this.props.BasePath + item.path}
                    component={item.component[item.name]}
                  />
                  {console.log(item.component[item.name])}
                </>
              ))}
          </Switch>
        </Suspense>
      </>
    );
  }
}
