import Input from "../../../../components/input";
import FormButton from "@/components/form-btn";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function SMSLogin(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations("SMS");

  return (
    <div className="flex flex-col gap-10 *:font-medium px-10 py-8">
      <div className="*:font-medium">
        <h1 className="text-3xl">{t("h1")}</h1>
        <h2 className="text-2xl">{t("h2")}</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input type="text" placeholder={t("telephoe")} required errors={[]} />
        <Input
          type="number"
          placeholder={t("verification")}
          required
          errors={[]}
        />
        <FormButton loading={false} text={t("verify")} />
      </form>
    </div>
  );
}
