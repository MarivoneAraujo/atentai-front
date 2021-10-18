import React from "react";
import dashboard from "./../../assets/menuAssets/dashboard.png";
import reports from "./../../assets/menuAssets/reports.png";
import warnings from "./../../assets/menuAssets/warnings.png";
import configurations from "./../../assets/menuAssets/configurations.png";
import Favourites from "./Favourites";

import {
  DashboardWrapper,
  Dashboard,
  Reports,
  Warnings,
  Configurations,
} from "./styled.js";
import { goToDashboard, goToReports, goToAlerts, goToConfigurations } from "../../routes/coordinator";
import { useHistory } from "react-router";


function Menu() {
  const history = useHistory()
  return (
    <DashboardWrapper>
      <Favourites/>
      <Dashboard src={dashboard} alt="dashboard" 
      onClick={()=>goToDashboard(history)}
      />
      <Reports src={reports} alt="reports" 
      onClick={()=>goToReports(history)}
      />
      <Warnings src={warnings} alt="warnings" 
      onClick={()=>goToAlerts(history)}
      />

      <Configurations src={configurations} alt="configurations" 
      onClick={()=>goToConfigurations(history)}
      />
    </DashboardWrapper>
  );
}

export default Menu;
