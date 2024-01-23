type Props = {
  data: string | null;
  searchWord: string | null;
  isLoading: boolean;
};
const MainContainer = ({ data, searchWord, isLoading }: Props) => {
  return (
    <div className="min-w-screen p-5">
      {searchWord}
      {isLoading && <p>Loading...</p>}
      <br />
      {data && (
        <div
          className="w-screen"
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
      )}
    </div>
  );
};

export default MainContainer;
