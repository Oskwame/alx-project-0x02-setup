export type Nullable<T> = T | null;

export interface SiteConfig {
  name: string;
  description?: string;
}

export interface CardProps {
  title: string;
  content: string;
}