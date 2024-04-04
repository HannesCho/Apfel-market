import Input from "../../../../components/input";
import FormButton from "@/components/form-btn";
import { unstable_setRequestLocale } from "next-intl/server";

export default function SMSLogin(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  return (
    <div className="flex flex-col gap-10 *:font-medium px-10 py-8">
      <div className="*:font-medium">
        <h1 className="text-3xl">SMS-Anmeldung</h1>
        <h2 className="text-2xl">Überprüfen Sie Ihre Telefonnummer</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input type="text" placeholder="Telefonnummer" required errors={[]} />
        <Input
          type="number"
          placeholder="Verifizierungscode"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Überprüfen" />
      </form>
    </div>
  );
}
