interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
  return (
    <button
      disabled={loading}
      className="w-full h-8 bg-red-500 rounded-md hover:bg-red-400 disabled:bg-neutral-500"
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
