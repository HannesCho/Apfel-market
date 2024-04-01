import Link from "next/link";

export default function CreateAccount() {
  return (
    <div>
      <div>
        <h1>Hallo!</h1>
        <h2>Untenstehendes Formular ausfüllen, um beizutreten</h2>
      </div>
      <form>
        <div>
          <input type="text" placeholder="Benutzername" required />
          <span>Eingabefehler</span>
        </div>
        <button>Konto erstellen</button>
      </form>
      <div>
        <Link href="/sms"></Link>
        <span>Symbol</span>
        <span>Per SMS anmelden</span>
      </div>
    </div>
  );
}
