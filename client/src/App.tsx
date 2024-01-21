import { useState } from "react";
import DOMPurify from "dompurify";

import Header from "./components/Header";
import InputField from "./components/InputField";
import MainContainer from "./components/MainContant";

function App() {
  const [data, setData] = useState<string | null>(null);

  const handleSubmit = (value: string) => {
    const URL = `http://localhost:4040`;
    if (!value) return;
    fetch(URL + `?text=${value}`)
      .then((response) => response.json())
      .then((json) => {
        console.log({ json });
        setData(DOMPurify.sanitize(json.html));
      });
  };

  return (
    <>
      <Header />
      <main className="w-2/3 mx-auto">
        <MainContainer data={data} />
        <InputField onSubmit={(value) => handleSubmit(value)} />
      </main>
    </>
  );
}

export default App;
