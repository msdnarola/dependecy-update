import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
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
    <Routes>
      {/* <Redirect
        exact={true}
        from="/google-material/utils"
        to="/google-material/utils/click-away-listener"
      /> */}
      <Route
        path="/google-material/utils/click-away-listener"
        component={ClickAwayListenerExamplesPage}
      />
      <Route path="/google-material/utils/modal" component={ModalExamplesPage} />
      <Route path="/google-material/utils/no-ssr" component={NoSSRExamplesPage} />
      <Route path="/google-material/utils/popover" component={PopoverExamplesPage} />
      <Route path="/google-material/utils/popper" component={PopperExamplesPage} />
      <Route path="/google-material/utils/portal" component={PortalExamplesPage} />
      <Route path="/google-material/utils/transitions" component={TransitionsExamplesPage} />
      <Route path="/google-material/utils/use-media-query" component={UseMediaQueryExamplesPage} />
    </Routes>
  );
}
