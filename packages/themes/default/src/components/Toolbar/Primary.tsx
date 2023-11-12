import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SPACING_OUTSIDE } from "./consts";
import { ToolbarProps } from "./props";
import { Identification } from "./Identification";
import { Navigation } from "./Navigation";

export function Primary(props: ToolbarProps): JSX.Element {
  const theme = useTheme();

  return (
    <Stack
      id="toolbar-top"
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: theme.spacing(SPACING_OUTSIDE),
        marginTop: theme.spacing(SPACING_OUTSIDE),
        marginRight: theme.spacing(SPACING_OUTSIDE),
      }}
    >
      <Identification {...props} />
      <Navigation />
    </Stack>
  );
}
