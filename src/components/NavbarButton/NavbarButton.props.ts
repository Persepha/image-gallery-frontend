import { MouseEvent, ReactNode } from "react";

export interface NavbarButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
