import finish1 from "../assets/finish1.svg";
import finish2 from "../assets/finish2.svg";
import { Button } from "flowbite-react";
import { pageStates } from "../constants/page";

export default function FinishPage({ allCorrect, setPageState }) {
  const backgroundColor = allCorrect ? "bg-green-300" : "bg-blue-300";
  const imageSrc = allCorrect ? finish1 : finish2;
  const title = allCorrect ? "You're a pricing prodigy" : "Good Effort";
  const content = allCorrect
    ? "Awesome job on getting all the prices right! Curious to know the ranking?"
    : "You have tried your best so that's what matters, Hope you had fun!";
  return (
    <div className={`p-2 min-h-screen ${backgroundColor}`}>
      <div className="flex justify-center items-center">
        <div className="mt-36 flex justify-center items-center w-64 h-64 border border-gray-100 rounded-full p-5 bg-white">
          <img className="w-48 h-48" src={imageSrc} alt="" />
        </div>
      </div>
      <div className="mt-12">
        <div className="text-2xl font-bold text-start">{title}</div>
      </div>
      <div className="mt-5">
        <div className="text-sm text-start">{content}</div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          onClick={() => setPageState(pageStates.leaderboard)}
          className="mt-36 w-4/5"
          color="dark"
          pill
        >
          <div className="font-bold">Check My Ranking</div>
        </Button>
      </div>
    </div>
  );
}
