import React, { Suspense } from "react";
import { Redirect, Switch, Routes } from "react-router-dom";
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
          <Redirect exact={true} from="/e-commerce" to="/e-commerce/customers" />
        }
        <ContentRoute path="/e-commerce/customers" element={<CustomersPage />} />
        <ContentRoute path="/e-commerce/products/new" element={<ProductEdit />} />
        <ContentRoute path="/e-commerce/products/:id/edit" element={<ProductEdit />} />
        <ContentRoute path="/e-commerce/products" element={<ProductsPage />} />
      </Routes>
    </Suspense>
  );
}
