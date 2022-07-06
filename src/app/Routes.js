/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useEffect } from "react";
import { Switch, Routes as Routess, Navigate, useNavigate } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { Route } from "react-router-dom";

export function Routes() {
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
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
                <BasePage />
              </Layout>
            }></Route>
          <Route path="*" element={<Navigate to={"/dashboard"} />} />
        </>
      )}

      <Route path="*" element={<AuthPage />} />
    </Routess>
  );
}

{
  /* <Route
path=""
element={
  <Layout>
    <BasePage />
  </Layout>
}></Route> */
}
