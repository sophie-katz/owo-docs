import { Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SPACING_OUTSIDE, SPACING_BETWEEN } from "./consts";
import { ToolbarProps } from "./props";

export interface ToolbarBottomProps extends ToolbarProps {
  sectionsOpacity: number;
}

export function Sections({
  sections,
  currentSectionName,
  onCurrentSectionNameChange,
  sectionsOpacity,
}: ToolbarBottomProps): JSX.Element {
  const theme = useTheme();

  return (
    <Stack
      id="toolbar-bottom"
      direction="row"
      sx={{
        alignItems: "center",
        marginLeft: theme.spacing(SPACING_OUTSIDE),
        marginRight: theme.spacing(SPACING_OUTSIDE),
        marginBottom: theme.spacing(SPACING_OUTSIDE),
        opacity: sectionsOpacity,
        transition: "opacity 0.1s ease-in-out",
      }}
      spacing={SPACING_BETWEEN}
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
  );
}
