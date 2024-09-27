"use client";
import {FaPaperclip, FaPaperPlane, FaWheelchair} from "react-icons/fa"
import {BsPaperclip, BsChat} from "react-icons/bs"
import { useState } from "react";
import CommentsDesktop from "./CommentsDesktop"


export default function Slide10() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        isOpen ? (
<div className="w-[100vw] min-h-screen flex flex-col justify-start items-center">
    <p onClick={() => setIsOpen(false)} className="cursor-pointer font-bold text-[5rem] mb-12">https://ocenaprojektu.vercel.app</p>
    <CommentsDesktop/>
    </div>
        ): (
            <div className="flex  flex-col items-center justify-start h-[35rem] rounded-lg border-2 p-8 bg-green-100 bg-opacity-80 font-semibold">
            <div className="flex flex-col w-[75%] h-[90%] bg-gray-500 rounded-xl shadow-2xl border-2 border-gray-800">
                <h1 className="text-center font-bold text-4xl mt-6">Bardzo serdecznie dziękujemy za uwagę!!!</h1>
                <div className="bg-white rounded-lg shadow-2xl h-72 w-52 border-2 border-gray-800 absolute left-64 bottom-28">
                    <h1 className="text-center border-b border-gray-600 font-bold">Pracę wykonali:</h1>
                    <ul className="px-2 p-2">
                            <li className="font-semibold">
                                - Bartek Kozanecki
                            </li>
                            <li className="font-semibold">
                                - Maciek Musiał
                            </li>
                            <li className="font-semibold">
                                - Dawid Aab
                            </li>
                            <li className="font-semibold flex">
                                - Tomek Ptasznik
                            </li>
                        </ul>
                        <FaPaperPlane className="w-16 h-16 absolute left-16 bottom-8"/>
                </div>

                <div className="bg-white rounded-lg shadow-2xl h-72 w-52 border-2 border-gray-800 absolute bottom-28 left-[550px]">
                    <h1 className="text-center border-b border-gray-600 font-bold">Materiały użyte w pracy</h1>
                    <p className="px-2 p-2">Materiały wykorzystane w naszej prezentacji dostępne są w zakładce <b>Materiały użyte w pracy</b> znajdującej się na górnym pasku.</p>
                    <FaPaperclip className="w-16 h-16 absolute left-16 bottom-8"/>
                </div>


                <div onClick={() => setIsOpen(true)} className=" cursor-pointer bg-white rounded-lg shadow-2xl h-72 w-52 border-2 border-gray-800 absolute bottom-28 right-64">
                    <h1 className="text-center border-b border-gray-600 font-bold">Skomentuj naszą pracę</h1>
                    <p className="px-2 p-2">Bardzo zachęcamy do odwiedzenia strony na swoim telefonie i skomentowania naszej pracy!</p>
                    <BsChat className="w-16 h-16 absolute left-16 bottom-8"/>
                </div>
                
            </div>
        </div>
        )
       
    );
}