import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import "../index.css";

const baseClassName =
  "mt-3 w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";
const correctSelectedClassName = `${baseClassName} animate-check border-green-500`;
const wrongSelectedClassName = `${baseClassName} animate-check border-red-500`;
const correctNotSelectedClassName = `${baseClassName} border-green-500`;
const wrongNotSelectedClassName = `${baseClassName} border-red-500`;

const renderCheckSVG = () => (
  <svg
    className="w-5 h-5 mr-2 stroke-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    color="green"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3px"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const renderWrongSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    color="red"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3px"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function GuessChoices({
  content,
  isAnswered,
  setIsAnswered,
  answer,
  setWrongGuesses,
  setCorrectGuesses,
  isSelected,
  handleSelectedChoice,
  setIsCorrect,
}) {
  const handleClick = () => {
    if (isAnswered) {
      return;
    }
    if (answer) {
      setIsCorrect(true);
      setCorrectGuesses((prev) => prev + 1);
    } else {
      setWrongGuesses((prev) => prev + 1);
    }
    handleSelectedChoice();
    setIsAnswered(true);
  };

  const getClassName = () => {
    if (!isAnswered) {
      return baseClassName;
    }
    if (isAnswered) {
      if (answer && !isSelected) {
        return correctNotSelectedClassName;
      } else if (answer && isSelected) {
        return correctSelectedClassName;
      } else if (!answer && isSelected) {
        return wrongSelectedClassName;
      } else {
        return baseClassName;
      }
    }
  };

  return (
    <button onClick={handleClick} className={getClassName()} color="light">
      {isAnswered ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-4 col-span-6">{content}</div>
          {answer && (
            <div className="col-start-12 col-span-1">{renderCheckSVG()}</div>
          )}
          {!answer && isSelected && (
            <div className="col-start-12 col-span-1">{renderWrongSVG()}</div>
          )}
        </div>
      ) : (
        content
      )}
    </button>
  );
}
