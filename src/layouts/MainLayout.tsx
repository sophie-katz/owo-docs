import "./MainLayout.css";
import { Toolbar } from "../components/Toolbar";
import VersionProps from "../lib/domain/VersionProps";
import { Grid, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";

export interface MainLayoutProps {
  image: string;
  attribution?: string;
  title: string;
  version?: VersionProps;
}

export function MainLayout({ image, title, version }: MainLayoutProps) {
  const [currentSectionName, setCurrentSectionName] =
    useState("Getting started");

  return (
    <>
      <div className="parallax" style={{ backgroundImage: `url("${image}")` }}>
        <Toolbar
          title={title}
          version={version}
          sections={{
            "Getting started": {},
            "Writing documentation": {},
            Customization: {},
            "API Reference": {},
          }}
          currentSectionName={currentSectionName}
          onCurrentSectionNameChange={setCurrentSectionName}
        ></Toolbar>
      </div>

      <div className="non-parallax-background">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ArrowForwardIos
              sx={{
                color: "#cccccc",
                fontSize: "2rem",
                rotate: "90deg",
                padding: "1rem",
                width: "100%",
                textAlign: "center",
                opacity: 0.5,
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ color: "#eeeeee" }}>
            <Typography variant="h1">Content</Typography>

            <Typography>asdfkjhskdfjhskjdfh</Typography>

            <Typography variant="h2">Content</Typography>

            <Typography sx={{ marginTop: "20rem" }}>
              asdfkjhskdfjhskjdfh
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
