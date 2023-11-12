import { Stack, Typography } from "@mui/material";
import { ParallaxProps } from "./props";
import { useWindowSize } from "@uidotdev/usehooks";
import { PARALLAX_LIP_HEIGHT, HERO_SPACING } from "./consts";
import { useTheme } from "@mui/material/styles";

export function Hero({ attribution }: ParallaxProps): JSX.Element {
  const theme = useTheme();

  const { height } = useWindowSize();

  return (
    <Stack
      direction="column"
      sx={{
        height: `calc(${height}px - ${theme.spacing(PARALLAX_LIP_HEIGHT)})`,
        justifyContent: "end",
      }}
    >
      <Typography
        fontSize={10}
        sx={{
          color: theme.palette.text.secondary,
          opacity: 0.7,
          marginBottom: theme.spacing(HERO_SPACING),
          marginLeft: theme.spacing(HERO_SPACING),
        }}
      >
        {attribution}
      </Typography>
    </Stack>
  );
}
