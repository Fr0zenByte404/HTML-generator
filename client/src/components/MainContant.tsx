import { useState } from "react";

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
        setData(json.html);
      });
  };

  return (
    <div className="min-h-[500px] bg-red-300 p-2">
      Main container
      <br />
      {data?.html && (
        <div dangerouslySetInnerHTML={{ __html: "<p>Hello !!!!!!</p>" }} />
      )}
      <button onClick={handleButtonClick} className="bg-teal-400 p-3 border">
        Send Request
      </button>
    </div>
  );
};

export default MainContainer;
