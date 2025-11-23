export type Nullable<T> = T | null;

export interface SiteConfig {
  name: string;
  description?: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full";
export interface ButtonProps {
  size?: ButtonSize;
  shape?: ButtonShape;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
import type { ReactNode } from "react";