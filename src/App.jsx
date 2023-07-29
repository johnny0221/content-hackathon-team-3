import { Button } from 'flowbite-react';
import { useState } from 'react';
import GuessItemResult from './components/GuessItemResult';
import GuessChoices from './components/GuessChoices';
import GuessItemContent from './components/GuessItemContent';
import LeaderBoard from './components/LeaderBoard';
import FinishPage from './components/FinishPage';
import { questions } from './constants/questions';
import { pageStates } from './constants/page';
import next from './assets/next.svg';
import CountdownBar from './components/CountdownBar';
import Entry from './components/Entry';
import './App.css';

const lastRound = 4;

function App() {
  const [pageState, setPageState] = useState(pageStates.entry);
  const [round, setRound] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isExceedTimeLimit, setIsExceedTimeLimit] = useState(false);

  const handleClickNextButton = () => {
    setRound((prevRound) => prevRound + 1);
    setIsAnswered(false);
    setIsCorrect(false);
    setIsExceedTimeLimit(false);
    setSelectedChoice(null);
  };

  const handleClickFinishButton = () => {
    setPageState(pageStates.finish);
    setIsAnswered(false);
    setIsExceedTimeLimit(false);
    setSelectedChoice(null);
  };

  const handleExceedTimeLimit = () => {
    setIsExceedTimeLimit(true);
    setIsAnswered(true);
    setIsCorrect(false);
    setSelectedChoice(null);
  };

  const renderEntry = () => <Entry setPageState={setPageState} />;

  const renderQuestionPage = () => (
    <div className='grid grid-cols-12 gap-4 p-5'>
      <div className='col-start-1 col-span-12'>
        {!isAnswered && (
          <CountdownBar handleExceedTimeLimit={handleExceedTimeLimit} />
        )}
      </div>
      <div className='col-start-1 col-span-12'>
        {isAnswered ? (
          <GuessItemResult
            question={questions[round]}
            isCorrect={isCorrect}
            isExceedTimeLimit={isExceedTimeLimit}
          />
        ) : (
          <GuessItemContent
            question={questions[round]}
            isAnswered={isAnswered}
          />
        )}
        {questions[round].choices.map((choice, index) => (
          <GuessChoices
            key={index}
            content={choice.content}
            answer={choice.answer}
            isAnswered={isAnswered}
            isSelected={selectedChoice === index}
            setIsAnswered={setIsAnswered}
            setCorrectGuesses={setCorrectGuesses}
            setIsCorrect={setIsCorrect}
            setWrongGuesses={setWrongGuesses}
            handleSelectedChoice={() => setSelectedChoice(index)}
          />
        ))}
        {isAnswered && (
          <div className='flex justify-center'>
            <Button
              onClick={
                round === lastRound
                  ? handleClickFinishButton
                  : handleClickNextButton
              }
              className='mt-8 w-1/2'
              color='dark'
              pill>
              <div className='flex justify-center items-center'>
                <div className='font-bold text-center'>
                  {round === lastRound ? 'Finish' : 'Next'}
                </div>
                <img className='ml-2 w-4 h-4' src={next} alt='' />
              </div>
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  const renderLeaderBoardPage = () => <LeaderBoard />;

  const renderFinishPage = () => (
    <FinishPage setPageState={setPageState} allCorrect={correctGuesses === 5} />
  );

  const renderMap = {
    [pageStates.entry]: renderEntry,
    [pageStates.question]: renderQuestionPage,
    [pageStates.finish]: renderFinishPage,
    [pageStates.leaderboard]: renderLeaderBoardPage,
  };
  return renderMap[pageState]();
}

export default App;
