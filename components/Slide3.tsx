import React from 'react';

import {FaUser, FaDatabase, FaBacon} from "react-icons/fa"

const Slide3: React.FC = () => {
  return (
    <div className="flex  flex-col items-center justify-start h-[35rem] rounded-lg border-2 p-4 bg-green-100 bg-opacity-80 font-semibold">
      <h1 className='text-center font-bold text-2xl'>Jak ważne są nasze dane i jakie ryzyko niesie nieprawidłowe ich wykorzystywanie?</h1>
      <div className='bg-gray-500 rounded-2xl shadow-3xl h-32 w-[55rem] absolute top-16'>
        <FaUser className='w-6 h-6 absolute top-12 left-2'/>
        <p className='absolute top-6 left-12 '>Nasze dane osobowe są tak naprawde wszystkim. Osoba, która posiadałaby nasze dane, takie jak hasła do stron i aplikacji, np. aplikacji bankowej mogłaby wyporządzić niesamowite szkody. W momencie utraty naszych danych możemy tak naprawde stracić wszystko nawet o tym nie wiedząc.</p>
      </div>


      <div className='bg-gray-500 rounded-2xl shadow-3xl h-32 w-[55rem] absolute top-56'>
        <FaDatabase className='w-6 h-6 absolute top-12 left-2'/>
        <p className='absolute top-2 left-12'>Nieprawidłowe wykorzystywanie naszych danych niesie za sobą opłakane skutki. Otwieramy takim zachowaniem furtke dla potencjalnych oprawców, którzy mogliby z naszymi danymi zrobić wszystko czego by tylko zachcieli. Wiąże się to z podszywaniem się pod naszą tożsamość w internecie, co może skutkować znacznie większą ilością ofiar, które mogły np. wysłać pieniądze takiej osobie.</p>
      </div>


      <div className='bg-gray-500 rounded-2xl shadow-3xl h-32 w-[55rem] absolute top-96'> 
        <FaBacon className='w-6 h-6 absolute top-12 left-2'/>
        <p className='absolute top-6 left-12'>Uważajmy na swoje dane, przede wszystkim na te najbardziej wrażliwe. Nigdy nie wiemy co druga osoba może z nimi zrobić i czy ma szczere intencje. Nasze dane nigdy nie powinny być gdziekolwiek upowszechniane, a każde źrodło, które ich wymaga powinno być dokładnie zweryfikowane.</p>
      </div>
    </div>
  );
};

export default Slide3;
