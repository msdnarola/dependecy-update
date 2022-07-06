import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import AvatarsExamplesPage from "./AvatarsExamplesPage";
import BadgesExamplesPage from "./BadgesExamplesPage";
import ChipsExamplesPage from "./ChipsExamplesPage";
import DividersExamplesPage from "./DividersExamplesPage";
import IconsExamplesPage from "./IconsExamplesPage";
import ListsExamplesPage from "./ListsExamplesPage";
import TablesExamplesPage from "./TablesExamplesPage";
import TooltipsExamplesPage from "./TooltipsExamplesPage";
import TypographyExamplesPage from "./TypographyExamplesPage";

export function DataDisplaysPage() {
  return (
    <Routes>
      {/* <Redirect exact={true} from="/google-material" to="/google-material/data-displays/avatars" /> */}
      <Route path="/google-material/data-displays/avatars" component={AvatarsExamplesPage} />
      <Route path="/google-material/data-displays/badges" component={BadgesExamplesPage} />
      <Route path="/google-material/data-displays/chips" component={ChipsExamplesPage} />
      <Route path="/google-material/data-displays/dividers" component={DividersExamplesPage} />
      <Route path="/google-material/data-displays/icons" component={IconsExamplesPage} />
      <Route path="/google-material/data-displays/lists" component={ListsExamplesPage} />
      <Route path="/google-material/data-displays/tables" component={TablesExamplesPage} />
      <Route path="/google-material/data-displays/tooltips" component={TooltipsExamplesPage} />
      <Route path="/google-material/data-displays/typography" component={TypographyExamplesPage} />
    </Routes>
  );
}
