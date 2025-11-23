import React from "react";
import { type ButtonProps } from "@/interfaces";
import type { ButtonSize } from "@/interfaces";

const sizeMap: Record<ButtonSize, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ size = "medium", shape = "rounded-md", children, onClick, type = "button" }) => {
  const base = "inline-flex items-center font-medium bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]";
  const classes = `${base} ${sizeMap[size]} ${shape}`;
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;