import { MainLayout } from "./layouts/MainLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { useState /*Fragment*/ } from "react";
import Section from "./lib/domain/Section";
import Version from "./lib/domain/Version";
// import { Link } from "@mui/material";

const VERSIONS: { [name: string]: Version } = {
  "0.1.0": {},
  "0.1.1 (pre)": {},
};

const SECTIONS: { [name: string]: Section } = {
  "Getting started": {},
  "Writing documentation": {},
  Customization: {},
  "API Reference": {},
};

export default function Root() {
  const [currentVersionName, setCurrentVersionName] = useState(
    Object.keys(VERSIONS)[0]
  );

  const [currentSectionName, setCurrentSectionName] = useState(
    Object.keys(SECTIONS)[0]
  );

  // const attribution = (
  //   <Fragment>
  //     {" "}
  //     Photo by{" "}
  //     <Link href="https://unsplash.com/@qrenep?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
  //       Rene Böhmer
  //     </Link>{" "}
  //     on{" "}
  //     <Link href="https://unsplash.com/photos/a-very-long-line-of-yellow-lines-on-a-black-background-YeUVDKZWSZ4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
  //       Unsplash
  //     </Link>
  //   </Fragment>
  // );

  return (
    <ThemeProvider theme={theme}>
      <MainLayout
        // image="/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg"
        title="OWO Docs"
        // attribution={attribution}
        versions={VERSIONS}
        currentVersionName={currentVersionName}
        onCurrentVersionNameChange={setCurrentVersionName}
        sections={SECTIONS}
        currentSectionName={currentSectionName}
        onCurrentSectionNameChange={setCurrentSectionName}
      ></MainLayout>
    </ThemeProvider>
  );
}
