import { IconName } from "@elements/icon/icon";
import clsx from "clsx";

export interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  testId?: string;
  variant?: "primary" | "secondary" | "tertiary";
  isDisabled?: boolean;
  icon?: IconName;
}

interface ButtonLinkProps extends ButtonBaseProps {
  url: string;
  type?: undefined;
  onClick?: undefined;
  ariaExpanded?: undefined;
  ariaControls?: undefined;
}

interface ButtonProps extends ButtonBaseProps {
  type?: "button" | "submit" | "reset";
  url?: undefined;
  onClick?: () => void;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export const buttonIconClasses = clsx("h-4 w-4");
