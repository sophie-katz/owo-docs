import { Toolbar, ToolbarProps } from "../components/Toolbar";
import { Parallax, ParallaxProps } from "../components/Parallax";
import { JSX } from "react";

export interface MainLayoutProps extends ToolbarProps, ParallaxProps {
  image: string;
  attribution?: JSX.Element;
}

export function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Toolbar {...props} />

      <Parallax {...props} />
    </>
  );
}
