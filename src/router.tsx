import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout, MainLayoutRouteProps } from "./layouts/MainLayout";
import Version from "./lib/domain/Version";
import Section from "./lib/domain/Section";

const VERSIONS: { [key: string]: Version } = {
  "0.1.0": { name: "0.1.0" },
  "0.1.1": { name: "0.1.1 (pre)" },
};

const SECTIONS: { [key: string]: Section } = {
  "getting-started": { name: "Getting started" },
  "writing-documentation": { name: "Writing documentation" },
  customization: { name: "Customization" },
  "api-reference": { name: "API Reference" },
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navigate
        to={`/${Object.keys(VERSIONS)[0]}/${Object.keys(SECTIONS)[0]}/`}
      />
    ),
  },
  {
    path: ":versionKey/:sectionKey",
    element: (
      <MainLayout title="OWO Docs" versions={VERSIONS} sections={SECTIONS} />
    ),
    loader: async ({ params }) => {
      const props: MainLayoutRouteProps = {
        versionKey: params["versionKey"]!,
        sectionKey: params["sectionKey"]!,
      };

      return props;
    },
  },
]);
