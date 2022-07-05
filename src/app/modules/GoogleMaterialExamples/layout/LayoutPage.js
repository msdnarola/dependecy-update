import React from "react";
import { Redirect, Switch, Routes } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import BoxExamplesPage from "./BoxExamplesPage";
import ContainerExamplesPage from "./ContainerExamplesPage";
import GridExamplesPage from "./GridExamplesPage";
import GridListExamplesPage from "./GridListExamplesPage";
import HiddenExamplesPage from "./HiddenExamplesPage";

export function LayoutPage() {
  return (
    <Routes>
      <Redirect exact={true} from="/google-material/layout" to="/google-material/layout/box" />

      <ContentRoute path="/google-material/layout/box" component={BoxExamplesPage} />
      <ContentRoute path="/google-material/layout/container" component={ContainerExamplesPage} />
      <ContentRoute path="/google-material/layout/grid" component={GridExamplesPage} />
      <ContentRoute path="/google-material/layout/grid-list" component={GridListExamplesPage} />
      <ContentRoute path="/google-material/layout/hidden" component={HiddenExamplesPage} />
    </Routes>
  );
}
