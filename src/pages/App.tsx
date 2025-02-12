import HistoryBox from "../components/layout/HistoryBox";
import PlayingBox from "../components/layout/PlayingBox";

function App() {
  return (
    <>
      <div className="w-screen">
        <div className="w-full lg:w-2/3 mx-auto my-10 flex flex-col md:flex-row justify-center items-center gap-10">
          <PlayingBox />
          <HistoryBox />
        </div>
      </div>
    </>
  );
}

export default App;
