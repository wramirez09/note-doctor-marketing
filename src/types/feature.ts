import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Feature = {
  id: number;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  title: string;
  paragraph: string;
  btn: string;
  btnLink: string;
  cite?: string; // Optional field for citation
};
