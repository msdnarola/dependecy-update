import React from "react";
import { Route } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./products/product-edit/ProductEdit";

export default function eCommercePage() {
  return (
    <>
      <Route path="customers" element={<CustomersPage />} />
      <Route path="products/new" element={<ProductEdit />} />
      <Route path="products/:id/edit" element={<ProductEdit />} />
      <Route path="products" element={<ProductsPage />} />
    </>
  );
}
