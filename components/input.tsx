interface IInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function Input({
  type,
  placeholder,
  required,
  errors,
}: IInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="p-2 bg-transparent rounded-md outline-none ring-1 ring-red-300 focus:ring-2 focus:ring-red-400 focus:rounded-md"
      />
      {errors.map((error, index) => {
        return (
          <span key={index} className="text-sm text-red-700">
            {error}
          </span>
        );
      })}
    </div>
  );
}
