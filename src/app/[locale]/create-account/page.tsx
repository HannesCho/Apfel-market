import Input from "../../../../components/input";
import FormButton from "@/components/form-btn";
import SnsButton from "@/components/sns-btn";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function CreateAccount() {
  const t = useTranslations("CreateAccount");

  return (
    <div className="flex flex-col gap-10 *:font-medium px-10 py-8">
      <div className="*:font-medium">
        <h1 className="text-3xl">{t("h1")}</h1>
        <h2 className="text-2xl">{t("h2")}</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input type="text" placeholder={t("username")} required errors={[]} />
        <Input type="email" placeholder={t("email")} required errors={[]} />
        <Input
          type="password"
          placeholder={t("password")}
          required
          errors={[]}
        />
        <Input
          type="password"
          placeholder={t("confirmed-password")}
          required
          errors={[]}
        />
        <FormButton loading={false} text={t("sign-up")} />
      </form>
      <div className="w-full h-[1px] bg-slate-500" />
      <div className="flex flex-col gap-3">
        <SnsButton
          href="/sms"
          text={t("SMS")}
          Icon={IoChatbubbleEllipsesOutline}
        />
        <SnsButton href="/github/start" text={t("Github")} Icon={FaGithub} />
      </div>
    </div>
  );
}
