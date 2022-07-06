import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import SliderExamplesPage from "./SliderExamplesPage";
import SpeedDialExamplesPage from "./SpeedDialExamplesPage";
import ToggleButtonExamplesPage from "./ToggleButtonExamplesPage";

export function LabsPage() {
  return (
    <Routes>
      {/* <Redirect exact={true} from="/google-material/labs" to="/google-material/labs/labs" /> */}

      <Route path="/google-material/labs/slider" component={SliderExamplesPage} />
      <Route path="/google-material/labs/speed-dial" component={SpeedDialExamplesPage} />
      <Route path="/google-material/labs/toggle-button" component={ToggleButtonExamplesPage} />
    </Routes>
  );
}
