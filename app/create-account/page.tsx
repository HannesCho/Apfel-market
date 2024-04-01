import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Benutzername"
            required
            className="p-2 bg-transparent rounded-md outline-none ring-1 ring-red-300 focus:ring-2 focus:ring-red-400 focus:rounded-md"
          />
          <span className="text-sm text-red-700">Eingabefehler</span>
        </div>
        <button className="w-full h-8 bg-red-500 rounded-md hover:bg-red-400">
          Konto erstellen
        </button>
      </form>
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
