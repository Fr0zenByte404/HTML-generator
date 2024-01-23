import { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import MainContainer from "./components/MainContant";
import htmlPurify from "./helpers/htmlpurify";

function App() {
  const [data, setData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (value: string) => {
    const URL = `http://localhost:4040`;
    if (!value) return;
    setIsLoading(true);
    fetch(URL + `?text=${value}`)
      .then((response) => response.json())
      .then((json: any) => {
        console.log({ json });
        setData(htmlPurify(json.html));
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Header />
      <main className="">
        <MainContainer
          data={data}
          searchWord={inputValue}
          isLoading={isLoading}
        />
        {isLoading && <span className="w-2 h-2 bg-green-500"></span>}
        <InputField
          onSubmit={(value) => {
            handleSubmit(value);
            setInputValue(value);
          }}
        />
      </main>
    </>
  );
}

export default App;
