import { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import MainContainer from "./components/MainContant";

function App() {
  const [value, setValue] = useState("");

  return (
    <main>
      <Header />
      <MainContainer inputData={value} />
      <InputField buttonText="Send" onChange={setValue} value={value} />
    </main>
  );
}

export default App;
