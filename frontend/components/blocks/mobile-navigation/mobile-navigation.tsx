import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { MobileNavigationItem } from "@blocks/mobile-navigation/mobile-navigation.item";
import { IconName } from "@elements/icon/icon";

export const MobileNavigation = (): JSX.Element | null => {
  const { t } = useTranslation();
  const mobileNavigationClasses = clsx(
    "fixed inset-x-0 bottom-0 z-50 h-[50px] bg-black lg:hidden"
  );
  const mobileNavigationListClasses = clsx("grid h-full grid-cols-1");

  return (
    <nav className={mobileNavigationClasses} data-testid={"mobile-navigation"}>
      <ul
        className={mobileNavigationListClasses}
        data-testid={"mobile-navigation-list"}
      >
        <MobileNavigationItem iconName={IconName.news} url="/news">
          {t("navigation.news")}
        </MobileNavigationItem>
      </ul>
    </nav>
  );
};
