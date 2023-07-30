import { Button } from 'flowbite-react';
import { pageStates } from '../constants/page';

export default function Entry({ setPageState }) {
  return (
    <div className='relative w-full min-h-screen'>
      <div className="absolute inset-0 min-h-screen bg-[url('/src/assets/uhs.PNG')] bg-no-repeat bg-cover z-10"></div>
      <div className='absolute inset-0 min-h-screen bg-white opacity-40 z-20'></div>
      <div className='absolute w-full min-h-screen z-30 flex flex-col p-5'>
        <div className='mt-2 text-start font-bold text-4xl leading-relaxed'>
          How well do you know our products and stores? Take this quiz to find
          out!
        </div>
        <div className='mt-2 text-start text-gray-500'>Are you ready?</div>
        <div className=' mt-10 flex justify-center items-center'>
          <Button
            onClick={() => setPageState(pageStates.question)}
            className='mt-8 w-1/2'
            color='dark'
            pill>
            <div className='flex justify-center items-center'>
              <div className='font-bold text-center'>Quiz Me!</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
