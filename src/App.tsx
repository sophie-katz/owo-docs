// import { Home, GitHub } from "@mui/icons-material";
// import {
//   IconButton,
//   Button,
//   Grid,
//   Toolbar,
//   Box,
//   Select,
//   SelectChangeEvent,
//   MenuItem,
//   TextField,
// } from "@mui/material";
// import { useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

// const VERSIONS: string[] = ["1.0.0", "1.0.1", "1.0.2"];

export default function App() {
  // const [currentVersion, setCurrentVersion] = useState("1.0.0");

  // function handleSelectVersionChange(event: SelectChangeEvent) {
  //   setCurrentVersion(event.target.value);
  // }

  // Photo by <a href="https://unsplash.com/@qrenep?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rene Böhmer</a> on <a href="https://unsplash.com/photos/a-very-long-line-of-yellow-lines-on-a-black-background-YeUVDKZWSZ4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

  // return (
  //   <>
  //     {/* <Toolbar
  //       sx={{
  //         position: "fixed",
  //         zIndex: 100,
  //         width: "100%",
  //         background: "white",
  //       }}
  //     >
  //       <IconButton>
  //         <Home />
  //       </IconButton>
  //       <Select
  //         value={currentVersion}
  //         label="Version"
  //         onChange={handleSelectVersionChange}
  //       >
  //         {VERSIONS.map((version) => (
  //           <MenuItem value={version}>{version}</MenuItem>
  //         ))}
  //       </Select>
  //       <TextField label="Search" variant="outlined" />
  //       <GitHub />
  //     </Toolbar>

  //     <div className="parallax"></div> */}

  //     {/* <Grid
  //       container
  //       spacing={2}
  //       className="parallax"
  //       height={{ height: "100%" }}
  //     >
  //       <Grid item xs={8}>
  //         <Button variant="contained">Hi</Button>
  //       </Grid>
  //     </Grid> */}
  //   </>
  // );

  return (
    <ThemeProvider theme={theme}>
      <MainLayout
        image="/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg"
        title="OWO Docs"
        version={{ default: "0.1.0", available: ["0.1.0", "0.1.1 (beta)"] }}
      ></MainLayout>
    </ThemeProvider>
  );
}
