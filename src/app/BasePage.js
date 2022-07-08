import React, { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() => import("./modules/ECommerce/pages/eCommercePage"));
const UserProfilepage = lazy(() => import("./modules/UserProfile/UserProfilePage"));

export default function BasePage() {
  useEffect(() => {
    console.log("Base page");
  }, []); // [] - is required if you need only one call
  //reactjs.org/docs/hooks-reference.html#useeffect

  https: return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/builder" element={<BuilderPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/google-material" element={<GoogleMaterialPage />} />
        <Route path="/react-bootstrap" element={<ReactBootstrapPage />} />
        <Route path="/e-commerce" element={<ECommercePage />} />
        <Route path="/user-profile" element={<UserProfilepage />} />
        <Route path="*" element={<Navigate to={"error/error-v1"} />} /> */}
      </Routes>
    </Suspense>
  );
}
