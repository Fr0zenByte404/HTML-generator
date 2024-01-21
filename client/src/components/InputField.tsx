type InputFieldProps = {
  buttonText: string;
  onChange: (value: string) => void;
  value: string;
};

const InputField = ({ buttonText, onChange, value }: InputFieldProps) => {
  return (
    <div className="flex fixed bottom-0 w-full p-5 gap-4">
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border h-10 rounded-lg"
      />
      <button className="h-10">{buttonText}</button>
    </div>
  );
};
export default InputField;
