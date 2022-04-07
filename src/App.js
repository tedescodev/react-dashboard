import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "./style";
import { NavigationBar, TopBar } from "./infrastructure/components";
import "./infrastructure/assets/css/App.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
import routes from "./infrastructure/routes";

function App() {
  const [toogle, setToogle] = useState(false);

  const getRoutes = (_routes) => {
    return _routes.map((prop, key) => {
      const Component = prop.component;
      return (
        <Route
          exact
          path={prop.path}
          render={(props) => <Component {...props} />}
          key={key}
        />
      );
    });
  };

  return (
    <div className="App">
      <div className="container">
        <NavigationBar toogle={toogle} routes={routes} />
        <Main toogle={toogle}>
          <TopBar toogle={toogle} setToogle={(e) => setToogle(e)} />
          <div className="main-panel">
            <BrowserRouter>
              <Switch>{getRoutes(routes)}</Switch>
            </BrowserRouter>
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
