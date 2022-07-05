import React from "react";
import { Route } from "react-router-dom";
import { ProductsLoadingDialog } from "./products-loading-dialog/ProductsLoadingDialog";
import { ProductDeleteDialog } from "./product-delete-dialog/ProductDeleteDialog";
import { ProductsDeleteDialog } from "./products-delete-dialog/ProductsDeleteDialog";
import { ProductsFetchDialog } from "./products-fetch-dialog/ProductsFetchDialog";
import { ProductsUpdateStatusDialog } from "./products-update-status-dialog/ProductsUpdateStatusDialog";
import { ProductsCard } from "./ProductsCard";
import { ProductsUIProvider } from "./ProductsUIContext";
import { Route } from "react-router-dom";

export function ProductsPage({ navigate }) {
  const productsUIEvents = {
    newProductButtonClick: () => {
      navigate("/e-commerce/products/new");
    },
    openEditProductPage: (id) => {
      navigate(`/e-commerce/products/${id}/edit`);
    },
    openDeleteProductDialog: (id) => {
      navigate(`/e-commerce/products/${id}/delete`);
    },
    openDeleteProductsDialog: () => {
      navigate(`/e-commerce/products/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      navigate(`/e-commerce/products/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      navigate("/e-commerce/products/updateStatus");
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path="/e-commerce/products/deleteProducts">
        {({ navigate, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              navigate("/e-commerce/products");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/products/:id/delete">
        {({ navigate, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              navigate("/e-commerce/products");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/products/fetch">
        {({ navigate, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              navigate("/e-commerce/products");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/products/updateStatus">
        {({ navigate, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              navigate("/e-commerce/products");
            }}
          />
        )}
      </Route>
      <ProductsCard />
    </ProductsUIProvider>
  );
}
