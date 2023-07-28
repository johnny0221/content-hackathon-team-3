import { Button } from "flowbite-react";
import { pageStates } from "../constants/page";

export default function Entry({ setPageState }) {
  return (
    <div className="flex flex-col p-5">
      <div className="mt-2 text-start font-bold text-5xl leading-relaxed">
        How well do you know our products and stores? Take this quiz to find
        out!
      </div>
      <div className="mt-2 text-start text-gray-500">Are you ready?</div>
      <div className=" mt-10 flex justify-center items-center">
        <Button
          onClick={() => setPageState(pageStates.question)}
          className="mt-8 w-1/2"
          color="dark"
          pill
        >
          <div className="flex justify-center items-center">
            <div className="font-bold text-center">Quiz Me!</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
