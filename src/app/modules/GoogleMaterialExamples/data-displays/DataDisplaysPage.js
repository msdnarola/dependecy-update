import React from "react";
import { Route } from "react-router-dom";
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
    <>
      {/* <Redirect exact={true} from="/google-material" to="/google-material/data-displays/avatars" /> */}
      <Route path="data-displays/avatars" element={<AvatarsExamplesPage></AvatarsExamplesPage>} />
      <Route path="data-displays/badges" element={<BadgesExamplesPage />} />
      <Route path="data-displays/chips" element={<ChipsExamplesPage />} />
      <Route path="data-displays/dividers" element={<DividersExamplesPage />} />
      <Route path="data-displays/icons" element={<IconsExamplesPage />} />
      <Route path="data-displays/lists" element={<ListsExamplesPage />} />
      <Route path="data-displays/tables" element={<TablesExamplesPage />} />
      <Route path="data-displays/tooltips" element={<TooltipsExamplesPage />} />
      <Route path="data-displays/typography" element={<TypographyExamplesPage />} />
    </>
  );
}
