import Link from "next/link";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function LandingPage(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations("Landing");

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="flex flex-col items-center my-auto *:font-medium gap-3">
        <span className="text-9xl opacity-80">🍎</span>
        <h1 className="text-4xl">{t("h1")}</h1>
        <h2 className="text-2xl">{t("h2")}</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <Link
          href={`${props.params.locale}/create-account`}
          className="w-full p-2.5 text-center text-white bg-red-500 focus:bg-red-400 rounded-2xl font-medium text-xl"
        >
          {t("start-btn")}
        </Link>
        <div className="flex gap-3">
          <span className="text-lg text-neutral-600">
            {t("have-account-text")}
          </span>
          <Link
            href={`${props.params.locale}/login`}
            className="text-lg hover:underline hover:underline-offset-1"
          >
            {t("login-text")}
          </Link>
        </div>
      </div>
    </div>
  );
}
