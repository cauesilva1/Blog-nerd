import React from "react";
import { ButtonIconProps } from "./button.types";

export const ButtonIcon: React.FC<ButtonIconProps> = ({ type: Icon  }) => {
  return <Icon />;
};
