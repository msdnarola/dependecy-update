import React from "react";
import { Route } from "react-router-dom";
import ProgressExamplesPage from "./ProgressExamplesPage";
import DialogsExamplesPage from "./DialogsExamplesPage";
import SnackbarsExamplesPage from "./SnackbarsExamplesPage";

export function FeedbackPage() {
  return (
    <>
      <Route path="feedback/progress" element={<ProgressExamplesPage />} />
      <Route path="feedback/dialogs" element={<DialogsExamplesPage />} />
      <Route path="feedback/snackbars" element={<SnackbarsExamplesPage />} />
    </>
  );
}
