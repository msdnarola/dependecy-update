import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import ButtonsExamplesPage from "./ButtonsExamplesPage";
import CheckboxesExamplesPage from "./CheckboxesExamplesPage";
import PickersExamplesPage from "./PickersExamplesPage";
import RadioButtonsExamplesPage from "./RadioButtonsExamplesPage";
import SelectsExamplesPage from "./SelectsExamplesPage";
import SwitchesExamplesPage from "./SwitchesExamplesPage";
import TextFieldsExamplesPage from "./TextFieldsExamplesPage";
import TransferListExamplesPage from "./TransferListExamplesPage";
import AutocompleteExamplesPage from "./AutocompleteExamplesPage";
import { ContentRoute } from "../../../../_metronic/layout";

export function InputsPage() {
  return (
    <Routes>
      {/* <Redirect
        exact={true}
        from="/google-material/inputs"
        to="/google-material/inputs/autocomplete"
      /> */}

      <Route path="/google-material/inputs/autocomplete" component={AutocompleteExamplesPage} />
      <Route path="/google-material/inputs/buttons" component={ButtonsExamplesPage} />
      <Route path="/google-material/inputs/checkboxes" component={CheckboxesExamplesPage} />
      <Route path="/google-material/inputs/pickers" component={PickersExamplesPage} />
      <Route path="/google-material/inputs/radio-buttons" component={RadioButtonsExamplesPage} />
      <Route path="/google-material/inputs/selects" component={SelectsExamplesPage} />
      <Route path="/google-material/inputs/switches" component={SwitchesExamplesPage} />
      <Route path="/google-material/inputs/text-fields" component={TextFieldsExamplesPage} />
      <Route path="/google-material/inputs/transfer-list" component={TransferListExamplesPage} />
    </Routes>
  );
}
