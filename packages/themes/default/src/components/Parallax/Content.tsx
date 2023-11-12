import { useWindowSize } from "@uidotdev/usehooks";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { PARALLAX_LIP_HEIGHT } from "./consts";
import { useState } from "react";

export function Content(): JSX.Element {
  const theme = useTheme();

  const { height } = useWindowSize();

  const [scrollDownMessageOpacity, setScrollDownMessageOpacity] = useState(0);

  const scrollDownMessageSxProps: SxProps<Theme> = {
    color: theme.palette.text.disabled,
    opacity: scrollDownMessageOpacity,
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: height,
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: theme.spacing(PARALLAX_LIP_HEIGHT),
        }}
        onMouseEnter={() => setScrollDownMessageOpacity(1)}
        onMouseLeave={() => setScrollDownMessageOpacity(0)}
      >
        <Typography
          sx={{
            ...scrollDownMessageSxProps,
            marginRight: theme.spacing(2),
          }}
        >
          Scroll down
        </Typography>
        <ArrowBackIos
          sx={{
            color: theme.palette.text.disabled,
            rotate: "90deg",
            // This is to account for the icon's rotation so that it still appears centered
            marginTop: "12px",
          }}
        />
        <Typography
          sx={{
            marginLeft: theme.spacing(2),
            ...scrollDownMessageSxProps,
          }}
        >
          for more
        </Typography>
      </Stack>
    </Stack>
  );
}
