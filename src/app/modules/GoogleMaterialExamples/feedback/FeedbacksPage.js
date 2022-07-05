import React from "react";
import { Redirect, Switch, Routes } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import ProgressExamplesPage from "./ProgressExamplesPage";
import DialogsExamplesPage from "./DialogsExamplesPage";
import SnackbarsExamplesPage from "./SnackbarsExamplesPage";

export function FeedbackPage() {
  return (
    <Routes>
      <Redirect
        exact={true}
        from="/google-material/feedback"
        to="/google-material/feedback/progress"
      />

      <ContentRoute path="/google-material/feedback/progress" element={<ProgressExamplesPage />} />
      <ContentRoute path="/google-material/feedback/dialogs" element={<DialogsExamplesPage />} />
      <ContentRoute
        path="/google-material/feedback/snackbars"
        element={<SnackbarsExamplesPage />}
      />
    </Routes>
  );
}
