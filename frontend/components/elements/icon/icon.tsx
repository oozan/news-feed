import clsx from "clsx";

export enum IconName {
  arrowUp = "arrow-up",
  arrowLeft = "arrow-left",
  arrowRight = "arrow-right",
  arrowDown = "arrow-down",
  chevronUp = "chevron-up",
  chevronLeft = "chevron-left",
  chevronRight = "chevron-right",
  chevronDown = "chevron-down",
  upload = "upload",
  user = "user",
  times = "times",
  pen = "pen",
  plus = "plus",
  home = "home",
  comment = "comment",
  folder = "folder",
  news = "news",
  ellipsisHorizontal = "ellipsis-h",
  ellipsisVertical = "ellipsis-v",
  tag = "tag",
  edit = "edit",
  bell = "bell",
  check = "check",
  exclamation = "exclamation",
  globe = "globe",
}

interface IconProps {
  className?: string;
  icon: IconName;
  testId?: string;
}

export const Icon = ({ className = "", icon, testId }: IconProps) => {
  const iconClasses = clsx("translate-y-px", { [className]: true });

  return (
    <svg
      data-testid={testId ?? `icon-${icon}`}
      className={iconClasses}
      aria-hidden="true"
    >
      <use href={`/sprites/solid.svg#${icon}`} />
    </svg>
  );
};
