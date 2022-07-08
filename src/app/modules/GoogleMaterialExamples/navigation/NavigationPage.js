import React from "react";
import { Route } from "react-router-dom";
import BreadcrumbsExamplesPage from "./BreadcrumbsExamplesPage";
import DrawerExamplesPage from "./DrawerExamplesPage";
import LinksExamplesPage from "./LinksExamplesPage";
import MenusExamplesPage from "./MenusExamplesPage";
import SteppersExamplesPage from "./SteppersExamplesPage";
import TabsExamplesPage from "./TabsExamplesPage";
import BottomNavigationExamplesPage from "./BottomNavigationExamplesPage";

export function NavigationPage() {
  return (
    <>
      <Route
        path="navigation/bottom-navigation"
        element={<BottomNavigationExamplesPage></BottomNavigationExamplesPage>}
      />
      <Route path="navigation/breadcrumbs" element={<BreadcrumbsExamplesPage />} />
      <Route path="navigation/drawer" element={<DrawerExamplesPage />} />
      <Route path="navigation/links" element={<LinksExamplesPage />} />
      <Route path="navigation/menus" element={<MenusExamplesPage />} />
      <Route path="navigation/steppers" element={<SteppersExamplesPage />} />
      <Route path="navigation/tabs" element={<TabsExamplesPage />} />
    </>
  );
}
