import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import ProgressExamplesPage from "./ProgressExamplesPage";
import DialogsExamplesPage from "./DialogsExamplesPage";
import SnackbarsExamplesPage from "./SnackbarsExamplesPage";

export function FeedbackPage() {
  return (
    <Routes>
      {/* <Redirect
        exact={true}
        from="/google-material/feedback"
        to="/google-material/feedback/progress"
      /> */}

      <Route path="/google-material/feedback/progress" element={<ProgressExamplesPage />} />
      <Route path="/google-material/feedback/dialogs" element={<DialogsExamplesPage />} />
      <Route path="/google-material/feedback/snackbars" element={<SnackbarsExamplesPage />} />
    </Routes>
  );
}
