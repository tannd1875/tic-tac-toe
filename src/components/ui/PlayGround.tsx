import { useGlobalMatchContext } from "../../contexts/matchContext";
import Square from "./Square";

const PlayGround = () => {
  const { marks } = useGlobalMatchContext();
  return (
    <div className={`grid grid-cols-3 gap-2 max-w-[500px] min-w-[300px]`}>
      {marks.map((mark, index) => {
        return <Square index={index} key={index} mark={mark} />;
      })}
    </div>
  );
};

export default PlayGround;
