import Input from "../../../../components/input";
import FormButton from "@/components/form-btn";
import SnsButton from "@/components/sns-btn";
import { FaGithub } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Login(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations("Login");
  return (
    <div className="flex flex-col gap-10 *:font-medium px-10 py-8">
      <div className="*:font-medium">
        <h1 className="text-3xl">{t("h1")}</h1>
        <h2 className="text-2xl">{t("h2")}</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input type="email" placeholder={t("email")} required errors={[]} />
        <Input
          type="password"
          placeholder={t("password")}
          required
          errors={[]}
        />
        <FormButton loading={false} text={t("login")} />
      </form>
    </div>
  );
}
