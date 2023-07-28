import Block from "./Block";
import Record from "./Record";
import Sku from "./Sku";
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import face from "../assets/face.svg";
import pen from "../assets/pen.svg";
import film from "../assets/film.svg";
import { questions } from "../constants/questions";
import { Button } from "flowbite-react";

export default function LeaderBoard() {
  return (
    <div className="flex flex-col p-5">
      <div className="mt-10 flex justify-center">
        <div className="flex justify-center items-center border-2 rounded-full border-gray-1 w-20 h-20">
          <img className="w-10 h-10" src={face} alt="" />
        </div>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <div className="text-sm font-bold">TheAmazingShopbacker777</div>
        <img className="w-5 h-5 ml-1" src={pen} alt="" />
      </div>
      <div className="mt-5 flex justify-around">
        <div className="flex flex-col justify-center items-center">
          <div className="text-sm text-gray-400 font-semibold">Your score</div>
          <div className="text-2xl font-bold">300</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-sm text-gray-400 font-semibold">Daily Rank</div>
          <div className="text-2xl font-bold">#29</div>
        </div>
      </div>
      <div className="h-auto p-5 flex flex-col items-center bg-white shadow-xl rounded-lg">
        <Record name="Player 1" points={300} photo={p1} first />
        <Record name="Player 2" points={295} photo={p2} index={1} />
        <Record name="Player 4" points={280} photo={p3} index={2} />
        <Record name="Player 5" points={275} photo={p3} index={3} />
        <Record name="Player 6" points={250} photo={p3} index={4} />
      </div>
      <div className="mt-1 flex justify-around items-center">
        <Button className="mt-8" color="light" pill>
          <div className="text-sm font-bold text-center">Share</div>
        </Button>
        <Button className="mt-8 w-1/2" color="dark" pill>
          <div className="ml-1 text-sm font-bold text-center">
            Discover more
          </div>
        </Button>
      </div>
      <div className="mt-8 border border-t-4 border-gray-100"></div>
      <div className="mt-8">
        <div className="text-lg text-start font-bold">
          Treat yourself to something nice?
        </div>
        <div className="grid grid-cols-12 mt-2">
          {questions.map((questionSku, index) => (
            <div className="col-span-6" key={index}>
              <Sku
                image={questionSku.question_image}
                skuName={questionSku.additionalInfo}
                skuPrice={
                  questionSku.choices.filter((choice) => choice.answer)[0]
                    .content
                }
                skuCashback="200"
                skuMerchant={questionSku.merchant_name}
                index={index}
              />
            </div>
          ))}
          {/* <Sku
              image={switchPicture}
              skuName="Banana"
              skuPrice="20"
              skuCashback="200"
              skuMerchant="Fruit"
            />
          </div>
          <div className="col-span-6">
            <Sku
              image={switchPicture}
              skuName="Banana"
              skuPrice="20"
              skuCashback="200"
              skuMerchant="Fruit"
            /> */}
        </div>
      </div>
    </div>
  );
}
