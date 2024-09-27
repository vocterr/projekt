import React from 'react';
import {FaPhoneAlt, FaLock, } from "react-icons/fa"
import {BsPhone, BsLock, BsChevronContract, BsChat, BsChatDots, BsChatRight } from "react-icons/bs"

const Slide1: React.FC = () => {
  return (
    <div className="flex  flex-col items-center justify-start h-[35rem] rounded-lg border-2 p-8 bg-blue-50">
          <h1 className='font-bold text-3xl'>Co wiedzą o nas telefony i jak możemy się chronić?</h1>
          <div className='absolute bg-gray-100 rounded-md border-2 border-black h-96 w-64  top-28 left-72'>
            <h1 className='text-center font-bold mt-2'>Czego dowiemy się w trakcie tej prezentacji?</h1>
            <div className='border-2 border-gray-600 rounded-lg h-28 absolute top-16 flex'>
              <BsPhone  className='absolute top-10 h-6 w-6'/>
              <p className="ml-8 font-semibold text-red-700">Prawdziwych konsekwencji wynikających z bezmyślnego korzystania z telefonu komórkowego.</p>
            </div>
            <div className='border-2 border-gray-600 rounded-lg h-32 absolute bottom-16'>
              <FaLock className='absolute top-10 h-6 w-6'/>
              <p className="ml-8 font-semibold text-green-700">Jakie są najlepsze sposoby w jakie możemy uchronić się przed zagrożeniami czychającymi na nas w internecie</p>
            </div>
            <h2 className='absolute bottom-3 left-8 font-semibold'>A także wiele wiele więcej...</h2>
          </div>
          <div className='absolute bg-gray-100 rounded-md border-2 border-black h-96 w-64  top-28 right-72'>
          <h1 className='text-center font-bold mt-4'>Jak posługiwać się naszą stroną?</h1>
          <div className='border-2 border-gray-600 rounded-lg h-28 absolute top-16'>
            <BsChatDots className='absolute top-10 h-6 w-6'/>
            <p className="ml-8 font-semibold text-blue-700">Jeśli zechcesz skomentować naszą pracę, możesz to zrobić wchodząc na stronę <b>ocenaprojektu.vercel.app</b></p>
          </div>
          <div className='border-2 border-gray-600 rounded-lg h-32 absolute bottom-16'>
            <BsChat className='absolute top-10 h-6 w-6'/>
            <p className="ml-8 font-semibold text-blue-700">Utworzone komentarze będą widoczne na samym końcu prezentacji i będą wyświetlały się na tablicy.</p>
          </div>
          <h2 className='absolute bottom-3 left-8 font-semibold'>Przejdźmy do prezentacji!</h2>
          </div>
    </div>
  );
};

export default Slide1;
