import { Stack } from "@mui/material";
import { Background } from "./Background";
import { ParallaxProps } from "./props";
import { Hero } from "./Hero";
import { Content } from "./Content";

export function Parallax(props: ParallaxProps): JSX.Element {
  return (
    <>
      <Background {...props} />

      <Stack direction="column">
        <Hero {...props} />
        <Content />
      </Stack>
    </>
  );
}
