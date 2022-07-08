import React from "react";
import { Route } from "react-router-dom";
import ButtonsExamplesPage from "./ButtonsExamplesPage";
import CheckboxesExamplesPage from "./CheckboxesExamplesPage";
import PickersExamplesPage from "./PickersExamplesPage";
import RadioButtonsExamplesPage from "./RadioButtonsExamplesPage";
import SelectsExamplesPage from "./SelectsExamplesPage";
import SwitchesExamplesPage from "./SwitchesExamplesPage";
import TextFieldsExamplesPage from "./TextFieldsExamplesPage";
import TransferListExamplesPage from "./TransferListExamplesPage";
import AutocompleteExamplesPage from "./AutocompleteExamplesPage";

export function InputsPage() {
  return (
    <>
      <Route path="inputs/autocomplete" element={<AutocompleteExamplesPage />} />
      <Route path="inputs/buttons" element={<ButtonsExamplesPage></ButtonsExamplesPage>} />
      <Route path="inputs/checkboxes" element={<CheckboxesExamplesPage />} />
      <Route path="inputs/pickers" element={<PickersExamplesPage />} />
      <Route path="inputs/radio-buttons" element={<RadioButtonsExamplesPage />} />
      <Route path="inputs/selects" element={<SelectsExamplesPage />} />
      <Route path="inputs/switches" element={<SwitchesExamplesPage />} />
      <Route path="inputs/text-fields" element={<TextFieldsExamplesPage />} />
      <Route path="inputs/transfer-list" element={<TransferListExamplesPage />} />
    </>
  );
}
