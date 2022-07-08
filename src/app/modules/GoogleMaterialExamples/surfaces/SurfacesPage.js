import React from "react";
import { Route } from "react-router-dom";
import AppBarExamplesPage from "./AppBarExamplesPage";
import PaperExamplesPage from "./PaperExamplesPage";
import CardsExamplesPage from "./CardsExamplesPage";
import ExpansionPanelsExamplesPage from "./ExpansionPanelsExamplesPage";

export function SurfacesPage() {
  return (
    <>
      <Route path="surfaces/app-bar" element={<AppBarExamplesPage></AppBarExamplesPage>} />
      <Route path="surfaces/paper" element={<PaperExamplesPage />} />
      <Route path="surfaces/cards" element={<CardsExamplesPage />} />
      <Route path="surfaces/expansion-panels" element={<ExpansionPanelsExamplesPage />} />
    </>
  );
}
