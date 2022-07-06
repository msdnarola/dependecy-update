import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import BreadcrumbsExamplesPage from "./BreadcrumbsExamplesPage";
import DrawerExamplesPage from "./DrawerExamplesPage";
import LinksExamplesPage from "./LinksExamplesPage";
import MenusExamplesPage from "./MenusExamplesPage";
import SteppersExamplesPage from "./SteppersExamplesPage";
import TabsExamplesPage from "./TabsExamplesPage";
import BottomNavigationExamplesPage from "./BottomNavigationExamplesPage";

export function NavigationPage() {
  return (
    <Routes>
      {/* <Redirect
        exact={true}
        from="/google-material/navigation"
        to="/google-material/navigation/bottom-navigation"
      /> */}
      <Route
        path="/google-material/navigation/bottom-navigation"
        component={BottomNavigationExamplesPage}
      />
      <Route path="/google-material/navigation/breadcrumbs" component={BreadcrumbsExamplesPage} />
      <Route path="/google-material/navigation/drawer" component={DrawerExamplesPage} />
      <Route path="/google-material/navigation/links" component={LinksExamplesPage} />
      <Route path="/google-material/navigation/menus" component={MenusExamplesPage} />
      <Route path="/google-material/navigation/steppers" component={SteppersExamplesPage} />
      <Route path="/google-material/navigation/tabs" component={TabsExamplesPage} />
    </Routes>
  );
}
