import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Input from "../../components/input";

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
        <button className="w-full h-8 bg-red-500 rounded-md hover:bg-red-400">
          Konto erstellen
        </button>
      </form>
      <div className="w-full h-[1px] bg-slate-500" />
      <div>
        <Link
          href="/sms"
          className="flex flex-row items-center justify-center gap-3 text-white primary-btn"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Per SMS anmelden</span>
        </Link>
      </div>
    </div>
  );
}
