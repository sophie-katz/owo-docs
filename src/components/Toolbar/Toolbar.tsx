import { Stack } from "@mui/material";
// import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  HEIGHT_MAX,
  HEIGHT_MIN,
  SHRINK_SCROLL_FACTOR,
  OPACITY_THRESHOLD,
} from "./consts";
import { Primary } from "./Primary";
import { Sections } from "./Sections";
import { ToolbarProps } from "./props";
import { useWindowScroll } from "@uidotdev/usehooks";

export function Toolbar(props: ToolbarProps): JSX.Element {
  // const [toolbarHeight, setToolbarHeight] = useState(HEIGHT_MAX);

  // const [sectionsOpacity, setSectionsOpacity] = useState(1);

  const theme = useTheme();

  // function handleWindowScroll() {
  //   const position = window.scrollY;

  //   const value = Math.max(
  //     HEIGHT_MAX - position / SHRINK_SCROLL_FACTOR,
  //     HEIGHT_MIN
  //   );

  //   setToolbarHeight(value);

  //   if (value < OPACITY_THRESHOLD) {
  //     setSectionsOpacity(0);
  //   } else {
  //     setSectionsOpacity(1);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleWindowScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleWindowScroll);
  //   };
  // });

  const scrollY = useWindowScroll()[0].y ?? 0;

  const toolbarHeight = Math.max(
    HEIGHT_MAX - scrollY / SHRINK_SCROLL_FACTOR,
    HEIGHT_MIN
  );

  const sectionsOpacity = toolbarHeight < OPACITY_THRESHOLD ? 0 : 1;

  return (
    <Stack
      id="toolbar"
      direction="column"
      sx={{
        height: theme.spacing(toolbarHeight),
        justifyContent: "space-between",
        overflow: "hidden",
        position: "fixed",
        width: "100%",
        backgroundColor: `${theme.palette.background.default}dd`,
        borderColor: theme.palette.divider,
        borderBottomWidth: "1px",
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}
    >
      <Primary {...props} />
      <Sections {...props} sectionsOpacity={sectionsOpacity} />
    </Stack>
  );
}
