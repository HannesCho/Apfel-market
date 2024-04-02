import Input from "../../components/input";
import FormButton from "@/components/form-btn";
import SnsButton from "@/components/sns-btn";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 *:font-medium px-10 py-8">
      <div className="*:font-medium">
        <h1 className="text-3xl">Hallo!</h1>
        <h2 className="text-2xl">
          Untenstehendes Formular ausfüllen, um beizutreten
        </h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input type="text" placeholder="Benutzername" required errors={[]} />
        <Input type="email" placeholder="Email" required errors={[]} />
        <Input type="password" placeholder="Passwort" required errors={[]} />
        <Input
          type="password"
          placeholder="Passwort bestätigen"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Konto erstellen" />
      </form>
      <div className="w-full h-[1px] bg-slate-500" />
      <div className="flex flex-col gap-3">
        <SnsButton
          href="/sms"
          text="Per SMS anmelden"
          Icon={IoChatbubbleEllipsesOutline}
        />
        <SnsButton
          href="/github/start"
          text="Per Github anmelden"
          Icon={FaGithub}
        />
      </div>
    </div>
  );
}
