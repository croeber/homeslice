import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import routes from "../routes";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Chris Roeber"
    };
  }

  render() {
    return (
      <div>

        <Header />
        <main className="container">

          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </main>

      </div>
    );
  }
}

export default Layout;
