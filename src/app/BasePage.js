import React, { Suspense, lazy } from "react";
import { Redirect, Route, Routes } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import { Route } from "react-router-dom";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() => import("./modules/ECommerce/pages/eCommercePage"));
const UserProfilepage = lazy(() => import("./modules/UserProfile/UserProfilePage"));

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Routes>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" element={<DashboardPage />} />
        <ContentRoute path="/builder" element={<BuilderPage />} />
        <ContentRoute path="/my-page" element={<MyPage />} />
        <Route path="/google-material" element={<GoogleMaterialPage />} />
        <Route path="/react-bootstrap" element={<ReactBootstrapPage />} />
        <Route path="/e-commerce" element={<ECommercePage />} />
        <Route path="/user-profile" element={<UserProfilepage />} />
        <Redirect to="error/error-v1" />
      </Routes>
    </Suspense>
  );
}
