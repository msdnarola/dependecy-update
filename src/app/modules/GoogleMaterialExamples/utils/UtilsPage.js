import React from "react";
import { Route } from "react-router-dom";
import ClickAwayListenerExamplesPage from "./ClickAwayListenerExamplesPage";
import ModalExamplesPage from "./ModalExamplesPage";
import NoSSRExamplesPage from "./NoSSRExamplesPage";
import PopoverExamplesPage from "./PopoverExamplesPage";
import PopperExamplesPage from "./PopperExamplesPage";
import PortalExamplesPage from "./PortalExamplesPage";
import TransitionsExamplesPage from "./TransitionsExamplesPage";
import UseMediaQueryExamplesPage from "./UseMediaQueryExamplesPage";

export function UtilsPage() {
  return (
    <>
      <Route path="utils/click-away-listener" element={<ClickAwayListenerExamplesPage />} />
      <Route path="utils/modal" element={<ModalExamplesPage />} />
      <Route path="utils/no-ssr" element={<NoSSRExamplesPage />} />
      <Route path="utils/popover" element={<PopoverExamplesPage />} />
      <Route path="utils/popper" element={<PopperExamplesPage />} />
      <Route path="utils/portal" element={<PortalExamplesPage />} />
      <Route path="utils/transitions" element={<TransitionsExamplesPage />} />
      <Route path="utils/use-media-query" element={<UseMediaQueryExamplesPage />} />
    </>
  );
}
