import React, { Suspense } from "react";
import { Switch, Routes, Route, Navigate } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function eCommercePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Routes>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Route
            path="/e-commerce"
            element={<Navigate to={"/e-commerce/customers"}></Navigate>}></Route>
        }
        <Route path="/e-commerce/customers" element={<CustomersPage />} />
        <Route path="/e-commerce/products/new" element={<ProductEdit />} />
        <Route path="/e-commerce/products/:id/edit" element={<ProductEdit />} />
        <Route path="/e-commerce/products" element={<ProductsPage />} />
      </Routes>
    </Suspense>
  );
}
