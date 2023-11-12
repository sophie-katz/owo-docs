import { Box } from "@mui/material";
import { ParallaxProps } from "./props";

export function Background({ image }: ParallaxProps): JSX.Element {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: `url("${image}")`,
        zIndex: -100,
        backgroundAttachment: "fixed",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
}
