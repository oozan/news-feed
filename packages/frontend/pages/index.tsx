import { Layout } from "@layouts/layout/layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold"> {t("common.initial")}</h1>
        <p className="text-center mt-6">{t("common.paragraph_1")}</p>
        <p className="text-center">{t("common.paragraph_2")}</p>
      </div>
    </Layout>
  );
}
