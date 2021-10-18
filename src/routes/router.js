import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import Main from "../pages/main/Main";
import Menu from "../pages/menu/Menu";
import NavigationBar from "../pages/navigationBar/NavigationBar";
import Information from "../pages/information/Information";
import Dashboard from "../pages/dashboard/Dashboard";
import Reports from "../pages/reports/Reports";
import Alerts from "../pages/alerts/Alerts";
import Configurations from "../pages/configurations/Configurations";

const Router = () => {

let renderComponents = (component) =>{
    return (<>
    <Main />
    <Menu />
    <NavigationBar />
    {component}
    </>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>

        <Route exact path="/main">
          {renderComponents(<Information />)}
        </Route>

        <Route exact path="/dashboard">          
        {renderComponents(<Dashboard />)}
        </Route>

        <Route exact path="/reports">     
        {renderComponents(<Reports/>)}
        </Route>

        <Route exact path="/alerts">     
        {renderComponents(<Alerts/>)}
        </Route>

        <Route exact path="/configurations">     
        {renderComponents(<Configurations/>)}
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default Router;
