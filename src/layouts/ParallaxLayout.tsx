import { Parallax, ParallaxProps } from "../components/Parallax";
import { JSX } from "react";

export interface ParallaxLayoutProps extends ParallaxProps {}

export function ParallaxLayout(props: ParallaxLayoutProps): JSX.Element {
  return <Parallax {...props} />;
}
