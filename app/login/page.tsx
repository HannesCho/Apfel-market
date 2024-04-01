import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="flex flex-col items-center my-auto *:font-medium gap-3">
        <span className="text-9xl opacity-80">🍎</span>
        <h1 className="text-4xl">Apfel</h1>
        <h2 className="text-2xl">Willkommen auf dem Apfel Markt!</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <Link
          href="/create-account"
          className="w-full p-2.5 text-center text-white bg-red-500 focus:bg-red-400 rounded-2xl font-medium text-xl"
        >
          Anfangen
        </Link>
        <div className="flex gap-3">
          <span className="text-lg text-neutral-600">
            Haben Sie bereits ein Konto?
          </span>
          <Link
            href="login"
            className="text-lg hover:underline hover:underline-offset-1"
          >
            Anmelden
          </Link>
        </div>
      </div>
    </div>
  );
}
