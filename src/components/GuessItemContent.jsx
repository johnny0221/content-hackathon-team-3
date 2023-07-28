import { Button } from "flowbite-react";

export default function GuessItemResult({ question }) {
  return (
    <div className="mt-8">
      <div className="flex justify-center items-center">
        <img
          className="w-1/2 h-1/2"
          src={question.question_image}
          alt="Guess Content Image"
        />
      </div>
      <div className="flex justify-end">
        <img
          className="w-1/3 h-1/3 p-5"
          src={question.merchant_logo}
          alt="Merchant Logo"
        />
      </div>
      <div className="p-5 text-lg font-bold text-start">
        {question.question}
      </div>
    </div>
  );
}
