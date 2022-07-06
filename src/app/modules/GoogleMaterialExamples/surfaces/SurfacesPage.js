import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import AppBarExamplesPage from "./AppBarExamplesPage";
import PaperExamplesPage from "./PaperExamplesPage";
import CardsExamplesPage from "./CardsExamplesPage";
import ExpansionPanelsExamplesPage from "./ExpansionPanelsExamplesPage";

export function SurfacesPage() {
  return (
    <Routes>
      {/* <Redirect
        exact={true}
        from="/google-material/surfaces"
        to="/google-material/surfaces/app-bar"
      /> */}
      <Route path="/google-material/surfaces/app-bar" component={AppBarExamplesPage} />
      <Route path="/google-material/surfaces/paper" component={PaperExamplesPage} />
      <Route path="/google-material/surfaces/cards" component={CardsExamplesPage} />
      <Route
        path="/google-material/surfaces/expansion-panels"
        component={ExpansionPanelsExamplesPage}
      />
    </Routes>
  );
}
