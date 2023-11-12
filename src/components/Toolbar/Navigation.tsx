import { GitHub, Search } from "@mui/icons-material";
import {
  IconButton,
  FormControl,
  TextField,
  Stack,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SPACING_BETWEEN } from "./consts";

export function Navigation(): JSX.Element {
  const theme = useTheme();

  return (
    <Stack
      id="toolbar-top-right"
      direction="row"
      spacing={SPACING_BETWEEN}
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
  );
}
