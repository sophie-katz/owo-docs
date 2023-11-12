import { Outlet } from "react-router-dom";
import { Toolbar } from "../components/Toolbar";
import { JSX } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { useLoaderData, useNavigate } from "react-router-dom";
import Version from "../lib/domain/Version";
import Section from "../lib/domain/Section";

export interface MainLayoutProps {
  title: string;
  versions: { [key: string]: Version };
  sections: { [key: string]: Section };
}

export interface MainLayoutRouteProps {
  versionKey: string;
  sectionKey: string;
}

export function MainLayout({
  title,
  versions,
  sections,
}: MainLayoutProps): JSX.Element {
  const { versionKey, sectionKey } = useLoaderData() as MainLayoutRouteProps;
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Toolbar
        title={title}
        versions={versions}
        currentVersionKey={versionKey}
        onCurrentVersionKeyChange={(versionKeyNew) => {
          navigate(`/${versionKeyNew}/${sectionKey}`);
        }}
        sections={sections}
        currentSectionKey={sectionKey}
        onCurrentSectionKeyChange={(sectionKeyNew) => {
          navigate(`/${versionKey}/${sectionKeyNew}`);
        }}
      />

      <Outlet />
    </ThemeProvider>
  );
}
