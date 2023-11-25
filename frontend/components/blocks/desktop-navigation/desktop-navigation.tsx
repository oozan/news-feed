import clsx from "clsx";
import { t } from "i18next";

import { DesktopNavigationItem } from "@blocks/desktop-navigation/desktop-navigation.item";
import { IconName } from "@elements/icon/icon";

interface DesktopNavigationProps {
  isCondensed?: boolean;
}

interface NavigationItem {
  label: string;
  url: string;
  icon: IconName;
}

export const DesktopNavigation = ({
  isCondensed,
}: DesktopNavigationProps): JSX.Element | null => {
  const desktopNavigationClasses = clsx("");
  const desktopNavigationListClasses = clsx("");

  return (
    <nav
      className={desktopNavigationClasses}
      data-testid={"desktop-navigation"}
    >
      <ul
        className={desktopNavigationListClasses}
        data-testid={"desktop-navigation-list"}
      >
        <DesktopNavigationItem iconName={IconName.news} url="/news">
          {t("navigation.news")}
        </DesktopNavigationItem>
      </ul>
    </nav>
  );
};
