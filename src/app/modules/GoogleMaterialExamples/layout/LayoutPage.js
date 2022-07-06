import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import BoxExamplesPage from "./BoxExamplesPage";
import ContainerExamplesPage from "./ContainerExamplesPage";
import GridExamplesPage from "./GridExamplesPage";
import GridListExamplesPage from "./GridListExamplesPage";
import HiddenExamplesPage from "./HiddenExamplesPage";

export function LayoutPage() {
  return (
    <Routes>
      {/* <Redirect exact={true} from="/google-material/layout" to="/google-material/layout/box" /> */}

      <Route path="/google-material/layout/box" component={BoxExamplesPage} />
      <Route path="/google-material/layout/container" component={ContainerExamplesPage} />
      <Route path="/google-material/layout/grid" component={GridExamplesPage} />
      <Route path="/google-material/layout/grid-list" component={GridListExamplesPage} />
      <Route path="/google-material/layout/hidden" component={HiddenExamplesPage} />
    </Routes>
  );
}
