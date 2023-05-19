import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { DotSpinner } from "@uiball/loaders";
import HomePage from "./pages/homePage";

// Lazy import pages
const AboutProjectPage = lazy(() => import("./pages/AboutProjectPage"));
const InfrastructuraPage = lazy(() => import("./pages/InfrastructuraPage"));
const ApartamentsPage = lazy(() => import("./pages/ApartamentsPage"));
const DocumentsPage = lazy(() => import("./pages/DocumentsPage"));
const RulesPage = lazy(() => import("./pages/RulesPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const AboutCompanyPage = lazy(() => import("./pages/AboutCompanyPage"));

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/aboutProject"
        element={
          <Suspense fallback={<DotSpinner />}>
            <AboutProjectPage />
          </Suspense>
        }
      />
      <Route
        path="/infrastructura"
        element={
          <Suspense fallback={<DotSpinner />}>
            <InfrastructuraPage />
          </Suspense>
        }
      />
      <Route
        path="/apartaments"
        element={
          <Suspense fallback={<DotSpinner />}>
            <ApartamentsPage />
          </Suspense>
        }
      />
      <Route
        path="/documents"
        element={
          <Suspense fallback={<DotSpinner />}>
            <DocumentsPage />
          </Suspense>
        }
      />
      <Route
        path="/rules"
        element={
          <Suspense fallback={<DotSpinner />}>
            <RulesPage />
          </Suspense>
        }
      />
      <Route
        path="/history"
        element={
          <Suspense fallback={<DotSpinner />}>
            <HistoryPage />
          </Suspense>
        }
      />
      <Route
        path="/contacts"
        element={
          <Suspense fallback={<DotSpinner />}>
            <ContactsPage />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<DotSpinner />}>
            <AboutCompanyPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Layout;
