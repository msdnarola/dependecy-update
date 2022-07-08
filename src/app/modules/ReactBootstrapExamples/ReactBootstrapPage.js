import React from "react";
import { Route } from "react-router-dom";
import AccordionExamplesPage from "./AccordionExamplesPage";
import AlertExamplesPage from "./AlertExamplesPage";
import BadgeExamplesPage from "./BadgeExamplesPage";
import BreadcrumbExamplesPage from "./BreadcrumbExamplesPage";
import ButtonsExamplesPage from "./ButtonsExamplesPage";
import ButtonGroupExamplesPage from "./ButtonGroupExamplesPage";
import CardsExamplesPage from "./CardsExamplesPage";
import CarouselExamplesPage from "./CarouselExamplesPage";
import DropdownsExamplesPage from "./DropdownsExamplesPage";
import FormsExamplesPage from "./FormsExamplesPage";
import InputGroupExamplesPage from "./InputGroupExamplesPage";
import ImagesExamplesPage from "./ImagesExamplesPage";
import FiguresExamplesPage from "./FiguresExamplesPage";
import JumbotronExamplesPage from "./JumbotronExamplesPage";
import ListGroupExamplesPage from "./ListGroupExamplesPage";
import ModalExamplesPage from "./ModalExamplesPage";
import NavsExamplesPage from "./NavsExamplesPage";
import NavbarExamplesPage from "./NavbarExamplesPage";
import OverlaysExamplesPage from "./OverlaysExamplesPage";
import PaginationExamplesPage from "./PaginationExamplesPage";
import PopoversExamplesPage from "./PopoversExamplesPage";
import ProgressExamplesPage from "./ProgressExamplesPage";
import SpinnersExamplesPage from "./SpinnersExamplesPage";
import TableExamplesPage from "./TableExamplesPage";
import TabsExamplesPage from "./TabsExamplesPage";
import TooltipsExamplesPage from "./TooltipsExamplesPage";
import ToastsExamplesPage from "./ToastsExamplesPage";

export default function ReactBootstrapPage() {
  return (
    <>
      {/* <Redirect exact={true} from="" to="react-bootstrap/accordion" /> */}

      <Route path="accordion" element={<AccordionExamplesPage />} />
      <Route path="alert" element={<AlertExamplesPage />} />
      <Route path="badge" element={<BadgeExamplesPage />} />
      <Route path="breadcrumb" element={<BreadcrumbExamplesPage />} />
      <Route path="buttons" element={<ButtonsExamplesPage />} />
      <Route path="button-group" element={<ButtonGroupExamplesPage />} />
      <Route path="cards" element={<CardsExamplesPage />} />
      <Route path="carousel" element={<CarouselExamplesPage />} />
      <Route path="dropdowns" element={<DropdownsExamplesPage />} />
      <Route path="forms" element={<FormsExamplesPage />} />
      <Route path="input-group" element={<InputGroupExamplesPage />} />
      <Route path="images" element={<ImagesExamplesPage />} />
      <Route path="figures" element={<FiguresExamplesPage />} />
      <Route path="jumbotron" element={<JumbotronExamplesPage />} />
      <Route path="list-group" element={<ListGroupExamplesPage />} />
      <Route path="modal" element={<ModalExamplesPage />} />
      <Route path="navs" element={<NavsExamplesPage />} />
      <Route path="navbar" element={<NavbarExamplesPage />} />
      <Route path="overlays" element={<OverlaysExamplesPage />} />
      <Route path="pagination" element={<PaginationExamplesPage />} />
      <Route path="popovers" element={<PopoversExamplesPage />} />
      <Route path="progress" element={<ProgressExamplesPage />} />
      <Route path="spinners" element={<SpinnersExamplesPage />} />
      <Route path="table" element={<TableExamplesPage />} />
      <Route path="tabs" element={<TabsExamplesPage />} />
      <Route path="tooltips" element={<TooltipsExamplesPage />} />
      <Route path="toasts" element={<ToastsExamplesPage />} />
    </>
  );
}
