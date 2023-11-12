import {
  Button,
  Select,
  FormControl,
  SelectChangeEvent,
  MenuItem,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SPACING_BETWEEN } from "./consts";
import { ToolbarProps } from "./props";

export function Identification({
  title,
  versions,
  currentVersionName,
  onCurrentVersionNameChange,
}: ToolbarProps): JSX.Element {
  const theme = useTheme();

  function handleSelectVersionNameChange(event: SelectChangeEvent) {
    onCurrentVersionNameChange(event.target.value);
  }

  return (
    <Stack
      id="toolbar-top-left"
      direction="row"
      spacing={SPACING_BETWEEN}
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
          value={currentVersionName}
          onChange={handleSelectVersionNameChange}
          variant="standard"
          size="small"
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          {Object.keys(versions).map((versionName) => (
            <MenuItem key={versionName} value={versionName}>
              {versionName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
