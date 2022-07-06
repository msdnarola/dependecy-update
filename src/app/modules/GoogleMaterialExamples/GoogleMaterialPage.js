import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
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
      <Route
        from="/google-material"
        element={<Navigate to={"/google-material/inputs/autocomplete"}></Navigate>}
      />
      {/* Surfaces */}
      <Route from="/google-material/surfaces" element={<SurfacesPage></SurfacesPage>} />

      {/* Layout */}
      <Route from="/google-material/layout" element={<LayoutPage />} />

      {/* Inputs */}
      <Route from="/google-material/inputs" element={<InputsPage />} />
      {/* Data Display */}
      <Route from="/google-material/data-displays" element={<DataDisplaysPage />} />

      {/* Navigation */}
      <Route from="/google-material/navigation" element={<NavigationPage />} />

      {/* Feedback */}
      <Route from="/google-material/feedback" element={<FeedbackPage />} />

      {/* Utils */}
      <Route from="/google-material/utils" element={<UtilsPage />} />

      {/* Lab */}
      <Route from="/google-material/labs" element={<LabsPage />} />
    </Routes>
  );
}
