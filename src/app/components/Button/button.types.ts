import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface ButtonContentProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

export interface ButtonRootProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface ButtonIconProps {
  type: IconType;
}
