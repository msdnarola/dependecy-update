import React from "react";
import { Redirect, Routes } from "react-router-dom";
import { InputsPage } from "./inputs/InputsPage";
import { DataDisplaysPage } from "./data-displays/DataDisplaysPage";
import { FeedbackPage } from "./feedback/FeedbacksPage";
import { LabsPage } from "./labs/LabsPage";
import { NavigationPage } from "./navigation/NavigationPage";
import { LayoutPage } from "./layout/LayoutPage";
import { SurfacesPage } from "./surfaces/SurfacesPage";
import { UtilsPage } from "./utils/UtilsPage";
import { ContentRoute } from "../../../_metronic/layout";

export default function GoogleMaterialPage() {
  return (
    <Routes>
      <Redirect exact={true} from="/google-material" to="/google-material/inputs/autocomplete" />
      {/* Surfaces */}
      <ContentRoute from="/google-material/surfaces" element={<SurfacesPage></SurfacesPage>} />

      {/* Layout */}
      <ContentRoute from="/google-material/layout" element={<LayoutPage />} />

      {/* Inputs */}
      <ContentRoute from="/google-material/inputs" element={<InputsPage />} />
      {/* Data Display */}
      <ContentRoute from="/google-material/data-displays" element={<DataDisplaysPage />} />

      {/* Navigation */}
      <ContentRoute from="/google-material/navigation" element={<NavigationPage />} />

      {/* Feedback */}
      <ContentRoute from="/google-material/feedback" element={<FeedbackPage />} />

      {/* Utils */}
      <ContentRoute from="/google-material/utils" element={<UtilsPage />} />

      {/* Lab */}
      <ContentRoute from="/google-material/labs" element={<LabsPage />} />
    </Routes>
  );
}
