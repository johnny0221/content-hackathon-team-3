import { Button } from "flowbite-react";

const renderHeartSVG = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path
      d="M7.48742 4.04747L8.00004 4.52745L8.51266 4.04747C9.82598 2.81775 11.9727 2.81826 13.2854 4.0489C13.9056 4.63037 14.2498 5.54072 14.2505 6.502C14.2512 7.45763 13.9122 8.36277 13.2996 8.94465L8.00021 13.5099L2.70238 8.94298C2.08953 8.3609 1.75023 7.45594 1.7505 6.50081C1.75077 5.54011 2.09456 4.63031 2.71472 4.0489C4.02737 2.81826 6.1741 2.81775 7.48742 4.04747Z"
      stroke="#414856"
      strokeWidth="1.5"
    />
  </svg>
);

export default function GuessItemContent({
  question,
  isCorrect,
  isExceedTimeLimit,
}) {
  const correctPrice = question.choices.filter((choice) => choice.answer)[0]
    .content;

  const getHint = () => {
    if (isExceedTimeLimit) {
      return "Oops, time’s up ⏰";
    }
    if (isCorrect) {
      return "Kudos 🎉";
    } else {
      return "Close call 💪";
    }
  };

  const getContent = () => {
    if (isExceedTimeLimit) {
      return "You can always try again at our daily quizzes. Stay tuned!";
    }
    if (isCorrect) {
      return "You guessed the right price!";
    } else {
      return "No worries. You’ll get another shot at the next question!";
    }
  };

  return (
    <div className="mt-8">
      <div>
        <div className="flex justify-center items-center">
          <img
            className="w-1/2 h-1/2"
            src={question.question_image}
            alt="Guess Content Image"
          />
        </div>
        <div className="flex justify-end">
          <img
            className="w-1/4 h-1/4 px-5"
            src={question.merchant_logo}
            alt="Merchant Logo"
          />
        </div>
        <div className="mt-3 text-gray-500 text-center text-xs">
          {question.additionalInfo}
        </div>
        <div className="mt-1 flex justify-center items-center">
          <div className="text-gray-500 font-bold text-center text-sm">
            {correctPrice} ·
          </div>
          <div className="text-black-800 font-bold ml-1">
            {" "}
            Up to 5% cashback
          </div>
        </div>
        <div className="mt-3 flex justify-around items-center">
          <Button color="light" className="border-black" pill>
            <div className="flex items-center">
              {renderHeartSVG()}
              <div className="font-bold ml-1">Save for later</div>
            </div>
          </Button>
          <Button
            onClick={() => window.open(question.redirectLink)}
            color="light"
            className="border-black"
            pill
          >
            <div className="font-bold">Check it out</div>
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-start">{getHint()}</div>
      </div>
      <div className="mt-3">
        <div className="text-start text-2xl font-bold">{getContent()}</div>
      </div>
    </div>
  );
}
