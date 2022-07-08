import React from "react";
import { Route } from "react-router-dom";
import BoxExamplesPage from "./BoxExamplesPage";
import ContainerExamplesPage from "./ContainerExamplesPage";
import GridExamplesPage from "./GridExamplesPage";
import GridListExamplesPage from "./GridListExamplesPage";
import HiddenExamplesPage from "./HiddenExamplesPage";

export function LayoutPage() {
  return (
    <>
      {/* <Redirect exact={true} from="/google-material/layout" to="/google-material/layout/box" /> */}

      <Route path="layout/box" element={<BoxExamplesPage />} />
      <Route path="layout/container" element={<ContainerExamplesPage />} />
      <Route path="layout/grid" element={<GridExamplesPage />} />
      <Route path="layout/grid-list" element={<GridListExamplesPage />} />
      <Route path="layout/hidden" element={<HiddenExamplesPage></HiddenExamplesPage>} />
    </>
  );
}
