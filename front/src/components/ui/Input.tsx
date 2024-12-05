type inputProps = {
  type: "text" | "number" | "email" | "password";
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Input = ({
  type = "text",
  placeholder,
  name,
  onChange,
  required = false,
}: inputProps) => {
  return (
    <input
      className="shadow-md p-4"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      required={required}
    />
  );
};

export default Input;
