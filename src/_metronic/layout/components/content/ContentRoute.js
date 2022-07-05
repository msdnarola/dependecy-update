import React from "react";
import { Route } from "react-router-dom";

import { Content } from "./Content";

export function ContentRoute({ children, element, render, ...props }) {
  return (
    <Route
      {...props}
      element={(routeProps) => {
        if (typeof children === "function") {
          return <Content>{children(routeProps)}</Content>;
        }

        if (!routeProps.match) {
          return null;
        }

        if (children) {
          return <Content>{children}</Content>;
        }

        if (element) {
          return <Content>{React.createElement(element, routeProps)}</Content>;
        }

        if (render) {
          return <Content>{render(routeProps)}</Content>;
        }

        return null;
      }}></Route>
  );
}
