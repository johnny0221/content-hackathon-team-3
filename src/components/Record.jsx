import { Avatar } from "flowbite-react";
import champ from "../assets/champ.svg";

const Record = ({ name, points, first, last, photo, index }) => {
  const getRoundedCornerClass = () => {
    if (first) {
      return "rounded-t-lg";
    } else if (last) {
      return "rounded-b-lg";
    } else {
      return "";
    }
  };
  return (
    <div className={`w-full bg-white px-1 py-3 ${getRoundedCornerClass()}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {first ? (
            <Avatar size="xs" img={champ} />
          ) : (
            <div className="w-6 h-6 p-1 bg-black text-white rounded-md text-xs font-bold">
              {index + 1}
            </div>
          )}
          <Avatar className="ml-4" bordered size="sm" img={photo} rounded />
          <div className="ml-2 font-bold text-xs">{name}</div>
        </div>
        <div className="text-gray-400 font-bold text-sm">{points} points</div>
      </div>
    </div>
  );
};

export default Record;
