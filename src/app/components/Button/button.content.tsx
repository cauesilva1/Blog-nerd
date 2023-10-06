import React from "react";
import { ButtonContentProps } from "./button.types";

export const ButtonContent: React.FC<ButtonContentProps> = ({
  children,
  ...props
}) => {
  return <span {...props}>{children}</span>;
};
