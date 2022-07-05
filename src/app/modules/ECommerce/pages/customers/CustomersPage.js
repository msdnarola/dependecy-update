import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerEditDialog } from "./customer-edit-dialog/CustomerEditDialog";
import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard";
import { Route } from "react-router-dom";

export function CustomersPage({ navigate }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      navigate("/e-commerce/customers/new");
    },
    openEditCustomerDialog: (id) => {
      navigate(`/e-commerce/customers/${id}/edit`);
    },
    openDeleteCustomerDialog: (id) => {
      navigate(`/e-commerce/customers/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      navigate(`/e-commerce/customers/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      navigate(`/e-commerce/customers/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      navigate("/e-commerce/customers/updateStatus");
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/e-commerce/customers/new">
        {({ navigate, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              navigate("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/:id/edit">
        {({ navigate, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              navigate("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/deleteCustomers">
        {({ navigate, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              navigate("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/:id/delete">
        {({ navigate, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              navigate("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/fetch">
        {({ navigate, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              navigate("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/updateStatus">
        {({ navigate, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              navigate("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
