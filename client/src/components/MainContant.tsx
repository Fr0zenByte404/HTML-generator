type Props = {
  data: string | null;
};
const MainContainer = ({ data }: Props) => {
  return (
    <div className="p-2 h-1/2">
      Main container
      <br />
      {data && (
        <div
          className="h-screen w-screen"
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
      )}
    </div>
  );
};

export default MainContainer;
