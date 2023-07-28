import Block from "./Block";

export default function GuessResult({ round }) {
  return (
    <div className="mt-3">
      <Block>
        <div className="text-2xl font-bold text-center">
          Round {round + 1}/5
        </div>
      </Block>
    </div>
  );
}
