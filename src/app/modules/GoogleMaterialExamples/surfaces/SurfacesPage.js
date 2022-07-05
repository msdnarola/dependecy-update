import React from "react";
import { Redirect, Switch, Routes } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import AppBarExamplesPage from "./AppBarExamplesPage";
import PaperExamplesPage from "./PaperExamplesPage";
import CardsExamplesPage from "./CardsExamplesPage";
import ExpansionPanelsExamplesPage from "./ExpansionPanelsExamplesPage";

export function SurfacesPage() {
  return (
    <Routes>
      <Redirect
        exact={true}
        from="/google-material/surfaces"
        to="/google-material/surfaces/app-bar"
      />
      <ContentRoute path="/google-material/surfaces/app-bar" component={AppBarExamplesPage} />
      <ContentRoute path="/google-material/surfaces/paper" component={PaperExamplesPage} />
      <ContentRoute path="/google-material/surfaces/cards" component={CardsExamplesPage} />
      <ContentRoute
        path="/google-material/surfaces/expansion-panels"
        component={ExpansionPanelsExamplesPage}
      />
    </Routes>
  );
}
