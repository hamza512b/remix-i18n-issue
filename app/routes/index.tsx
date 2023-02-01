import { useTranslation } from "react-i18next";

export default function Component() {
  let { t, i18n } = useTranslation();
  return (
    <>
      <h1>{t("greeting")}</h1>

      <button onClick={() => i18n.changeLanguage("es")}>Spanish</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
    </>
  );
}
