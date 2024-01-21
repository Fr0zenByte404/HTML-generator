import { useState } from "react";
import DOMPurify from "dompurify";

type Props = {
  inputData: string;
};
const MainContainer = ({ inputData }: Props) => {
  const [data, setData] = useState<any>(null);

  const handleButtonClick = () => {
    const URL = `http://localhost:4040`;

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        console.log({ json });
        setData(DOMPurify.sanitize(json.html));
      });
  };

  return (
    <div className="min-h-[500px] bg-red-300 p-2">
      Main container
      <br />
      {data && (
        <div
          className="h-screen w-screen"
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
      )}
      <button onClick={handleButtonClick} className="bg-teal-400 p-3 border">
        Send Request
      </button>
    </div>
  );
};

export default MainContainer;
