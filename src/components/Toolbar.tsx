import { GitHub, Search } from "@mui/icons-material";
import {
  IconButton,
  Button,
  Select,
  FormControl,
  SelectChangeEvent,
  MenuItem,
  TextField,
  Stack,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import { useState, useEffect } from "react";
import "./Toolbar.css";
import VersionProps from "../lib/domain/VersionProps";
import SectionProps from "../lib/domain/SectionProps";
import { useTheme } from "@mui/material/styles";

const TOOLBAR_SPACING_OUTSIDE: number = 1;
const TOOLBAR_SPACING_BETWEEN: number = 1;
const TOOLBAR_HEIGHT_MAX: number = 12;
const TOOLBAR_HEIGHT_MIN: number = 7.5;
const TOOLBAR_SHRINK_SCROLL_FACTOR: number = 15;
const TOOLBAR_OPACITY_THRESHOLD: number = 10.5;

export interface ToolbarProps {
  title: string;
  version?: VersionProps;
  sections: { [name: string]: SectionProps };
  currentSectionName: string;
  onCurrentSectionNameChange: (sectionName: string) => void;
}

export function Toolbar({
  title,
  version,
  sections,
  currentSectionName,
  onCurrentSectionNameChange,
}: ToolbarProps) {
  const [currentVersion, setCurrentVersion] = useState(version?.default);

  const [toolbarHeight, setToolbarHeight] = useState(TOOLBAR_HEIGHT_MAX);

  const [sectionsOpacity, setSectionsOpacity] = useState(1);

  const theme = useTheme();

  function handleSelectVersionChange(event: SelectChangeEvent) {
    setCurrentVersion(event.target.value);
  }

  function handleWindowScroll() {
    const position = window.scrollY;

    const value = Math.max(
      TOOLBAR_HEIGHT_MAX - position / TOOLBAR_SHRINK_SCROLL_FACTOR,
      TOOLBAR_HEIGHT_MIN
    );

    setToolbarHeight(value);

    if (value < TOOLBAR_OPACITY_THRESHOLD) {
      setSectionsOpacity(0);
    } else {
      setSectionsOpacity(1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  });

  return (
    <Stack
      id="toolbar"
      direction="column"
      className="toolbar"
      sx={{
        height: theme.spacing(toolbarHeight),
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Stack
        id="toolbar-top"
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: theme.spacing(TOOLBAR_SPACING_OUTSIDE),
          marginTop: theme.spacing(TOOLBAR_SPACING_OUTSIDE),
          marginRight: theme.spacing(TOOLBAR_SPACING_OUTSIDE),
        }}
      >
        <Stack
          id="toolbar-top-left"
          direction="row"
          spacing={TOOLBAR_SPACING_BETWEEN}
          sx={{ alignItems: "baseline" }}
        >
          <Button
            id="toolbar-title"
            variant="text"
            sx={{
              textTransform: "none",
              color: theme.palette.primary.main,
              fontWeight: 500,
              fontSize: "1.3rem",
            }}
          >
            {title}
          </Button>
          <FormControl id="toolbar-version" size="small">
            <Select
              value={currentVersion}
              onChange={handleSelectVersionChange}
              variant="standard"
              size="small"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              {version?.available.map((version) => (
                <MenuItem key={version} value={version}>
                  {version}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack
          id="toolbar-top-right"
          direction="row"
          spacing={TOOLBAR_SPACING_BETWEEN}
          sx={{ alignItems: "center" }}
        >
          <FormControl id="toolbar-search" size="small">
            <Autocomplete
              disablePortal
              freeSolo
              options={["hello", "world"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="toolbar-item"
                  variant="standard"
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: theme.palette.text.secondary }} />
                      </InputAdornment>
                    ),
                    sx: {
                      color: theme.palette.text.secondary,
                      width: theme.spacing(20),
                    },
                  }}
                />
              )}
            />
          </FormControl>
          <IconButton id="toolbar-repository" className="toolbar-item">
            <GitHub sx={{ color: theme.palette.primary.main }} />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        id="toolbar-bottom"
        direction="row"
        sx={{
          alignItems: "center",
          marginLeft: theme.spacing(TOOLBAR_SPACING_OUTSIDE),
          marginRight: theme.spacing(TOOLBAR_SPACING_OUTSIDE),
          marginBottom: theme.spacing(TOOLBAR_SPACING_OUTSIDE),
          opacity: sectionsOpacity,
          transition: "opacity 0.1s ease-in-out",
        }}
        spacing={TOOLBAR_SPACING_BETWEEN}
      >
        {Object.keys(sections).map((sectionName) => (
          <Button
            key={sectionName}
            sx={{
              color:
                sectionName === currentSectionName
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary,
              textTransform: "none",
            }}
            onClick={() => onCurrentSectionNameChange(sectionName)}
          >
            {sectionName}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
