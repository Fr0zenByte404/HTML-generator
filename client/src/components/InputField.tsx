import { useState } from "react";
import SendMessageIcon from "./SendMessageIcon";

type InputFieldProps = {
  onSubmit: (value: string) => void;
};

const InputField = ({ onSubmit }: InputFieldProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    setValue("");
    onSubmit(value);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="fixed bottom-0 w-4/6">
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <input
          id="chat"
          type="text"
          className="block  mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <SendMessageIcon />
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};
export default InputField;
