import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export default createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[400],
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
