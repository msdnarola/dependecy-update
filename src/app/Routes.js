/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Routes as Routess, Navigate, Outlet } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout } from "../_metronic/layout";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { Route } from "react-router-dom";
import { Dashboard } from "../_metronic/_partials";
import { InputsPage } from "./modules/GoogleMaterialExamples/inputs/InputsPage";
import { NavigationPage } from "./modules/GoogleMaterialExamples/navigation/NavigationPage";
import { DataDisplaysPage } from "./modules/GoogleMaterialExamples/data-displays/DataDisplaysPage";
import { FeedbackPage } from "./modules/GoogleMaterialExamples/feedback/FeedbacksPage";
import { SurfacesPage } from "./modules/GoogleMaterialExamples/surfaces/SurfacesPage";
import { UtilsPage } from "./modules/GoogleMaterialExamples/utils/UtilsPage";
import { LayoutPage } from "./modules/GoogleMaterialExamples/layout/LayoutPage";
import ReactBootstrapPage from "./modules/ReactBootstrapExamples/ReactBootstrapPage";
import { BuilderPage } from "./pages/BuilderPage";
import { ProfileCard } from "./modules/UserProfile/components/ProfileCard";
import UserProfilePage from "./modules/UserProfile/UserProfilePage";

export function Routes() {
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );

  //   useEffect(() => {
  //     if (!isAuthorized) {
  //       navigate("auth");
  //     }
  //   }, [isAuthorized]);
  return (
    <Routess>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route path="/error" element={<ErrorsPage />} />
      <Route path="/logout" element={<Logout />} />
      {isAuthorized && (
        <>
          <Route
            path="/dashboard"
            element={
              <Layout>
                {/* <BasePage /> */}
                <Dashboard></Dashboard>
              </Layout>
            }></Route>
          <Route path="/google-material/*" element={<Layout></Layout>}>
            {InputsPage()}
            {NavigationPage()}
            {DataDisplaysPage()}
            {FeedbackPage()}
            {SurfacesPage()}
            {UtilsPage()}
            {LayoutPage()}
          </Route>

          <Route path="/react-bootstrap/*" element={<Layout></Layout>}>
            {ReactBootstrapPage()}
          </Route>
          <Route
            path="/builder"
            element={
              <Layout>
                <BuilderPage></BuilderPage>
              </Layout>
            }></Route>
          <Route
            path="/user-profile/*"
            element={
              <Layout nooutlet={true}>
                <div className="d-flex flex-row">
                  <ProfileCard></ProfileCard>
                  <div className="flex-row-fluid ms-lg-8">
                    <Outlet></Outlet>
                  </div>
                </div>
              </Layout>
            }>
            {UserProfilePage()}
          </Route>

          {/* <Route path="/e-commerce/*" element={<Layout></Layout>}>
            {eCommercePage()}
          </Route> */}

          <Route path="*" element={<Navigate to={"/dashboard"} />} />
        </>
      )}

      <Route path="*" element={<AuthPage />} />
    </Routess>
  );
}
