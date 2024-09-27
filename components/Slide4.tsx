

import {FaLongArrowAltDown} from "react-icons/fa";

export default function Slide4() {
    return (
        <div className="flex  flex-col items-center justify-start h-[35rem] rounded-lg border-2 p-4 bg-green-100 bg-opacity-80 font-semibold">
            <h1 className="text-center font-bold text-2xl">Co wie o nas telefon oraz aplikacje, które zbierają nasze dane?</h1>
            <FaLongArrowAltDown className="rotate-45 h-32 w-32 absolute top-12 left-96"/>
            <FaLongArrowAltDown className="-rotate-45 h-32 w-32 absolute top-12 right-96"/>
            <h2 className="absolute font-bold top-[165px] left-[310px]">Podstawowe informacje</h2>
            <h2 className="absolute font-bold top-[165px] right-[310px]">Wrażliwe informacje</h2>


            <div className="w-52 bg-white h-80 border-2 border-gray-800 rounded-xl bottom-12 left-[170px] absolute">
                <h1 className="text-center font-bold">Co o nas wie?</h1>
                <p className="p-2 font-semibold">- Imię</p>
                        <p className="p-2 font-semibold">- Nazwisko</p>
                        <p className="p-2 font-semibold">- Wiek</p>
                        <p className="p-2 font-semibold">- Miejsce zamieszkania</p>
                        <p className="p-2 font-semibold">- Zdjęcie twarzy</p>
                        <p className="p-2 font-semibold">- Odwiedzone miejsca</p>
                        <p className="p-2 font-semibold">- Aktualna lokalizacja</p>
            </div>

            <div className="w-52 bg-white h-80 border-2 border-gray-800 rounded-xl bottom-12 left-[400px] absolute">
                <h1 className="text-center font-bold">Aplikacje zbierające dane</h1>
                <p className="p-2 font-semibold">- Google</p>
                        <p className="p-2 font-semibold">- Facebook</p>
                        <p className="p-2 font-semibold">- Snapchat</p>
                        <p className="p-2 font-semibold">- Instagram</p>
                        <p className="p-2 font-semibold">- X</p>
                        <p className="p-2 font-semibold">- Tiktok</p>
                        <p className="p-2 font-semibold">- Discord</p>
            </div>



            <div className="w-52 bg-white h-80 border-2 border-gray-800 rounded-xl bottom-12 right-[170px] absolute">
                <h1 className="text-center font-bold">Aplikacje zbierające dane</h1>
                <div className="flex flex-col">
                <p className="p-2 font-semibold">- GooglePay</p>
                        <p className="p-2 font-semibold">- ApplePay</p>
                        <p className="p-2 font-semibold">- Temu</p>
                        <p className="p-2 font-semibold">- AliExpress</p>
                        <p className="p-2 font-semibold">- Shein</p>
                        <p className="p-2 font-semibold">- Allegro</p>
                        <p className="p-2 font-semibold">- H&M</p>
                </div>
            </div>

            <div className="w-52 bg-white h-80 border-2 border-gray-800 rounded-xl bottom-12 right-[400px] absolute">
                <h1 className="text-center font-bold">Co o nas wie?</h1>
                <p className="p-2 font-semibold">- Informacje o transakcjach</p>
                        <p className="p-2 font-semibold">- Kod CVC</p>
                        <p className="p-2 font-semibold">- Numer Karty</p>
                        <p className="p-2 font-semibold">- Posiadacz Karty</p>
                        <p className="p-2 font-semibold">- Bank, w którym zarejestrowana jest karta</p>
                        <p className="p-2 font-semibold">- Odwiedzone miejsca</p>
            </div>
        </div>
    );
}