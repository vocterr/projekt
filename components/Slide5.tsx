"use client";
import {FaAmazon, FaArrowDown, FaArrowLeft, FaArrowRight, FaFacebook, FaGoogle, FaInstagram, FaSnapchatGhost, FaYoutube} from "react-icons/fa"
import { BsFacebook } from "react-icons/bs";
import {motion} from "framer-motion"
import {FcGoogle,} from "react-icons/fc";
import {AiFillInstagram} from "react-icons/ai"


export default function Slide5() {
    return (
        <div className="flex  flex-col items-center justify-start h-[35rem] rounded-lg border-2 p-2 bg-green-100 bg-opacity-80">
            <h1 className="font-bold text-2xl">Jak sprawdzić co wiedzą o nas dane aplikacje?</h1>
            <FaArrowDown className="absolute top-[308px] w-6 h-6"/>
            <FaArrowLeft className="w-12 h-12 absolute bottom-24 left-[390px]  z-50"/>
            <FaArrowRight className="w-12 h-12 absolute top-40 z-50 right-[390px]"/>
            <div className="w-96 h-64 bg-white rounded-lg absolute top-12 border-2 border-gray-800">
                <p className="ml-1 mt-1">Google umożliwia nam sprawdzenie jakie dane o nas posiadają aplikacje, na których logowaliśmy się za pomocą konta Google. Aby je sprawdzić należy przejść do <b> mojego konta Google</b>, w którym możemy sprawdzić nasze przetwarzane dane. Aby to zrobić należy przejść do zakładki <b>Dane i Prywatność</b>, która przekieruje nas do szczególnych informacji na temat naszego <b> konta Google</b>.</p>
                <div className="flex justify-between w-full absolute h-12 mt-2 border-t p-1 border-gray-900">
                <FcGoogle className="w-12 h-10"/>
                <FaYoutube className="w-12 h-10" color="red"/>
                <BsFacebook className="w-12 h-10" color="blue"/>
                </div>
            </div>


            <div className="h-72 w-60 rounded-xl bg-white absolute top-12 right-28 border-2 border-gray-800">
                <img src="images/jaksprawdzic.png" className="rounded-lg w-full h-full"/>
            </div>


            <div className="w-96 h-56 bg-white rounded-lg absolute bottom-1 border-2 border-gray-800">
                <p className="ml-1 mt-1">Po przejściu do zakładki <b>Dane i Prywatność</b> należy zjechać w dół gdzie znajduje się kategoria <b>Dane z aplikacji i usług, których używasz</b>. Zobaczymy tam <b>Aplikacje i usługi</b>, do których logowaliśmy się przy pomocy naszego <b>konta Google</b>. Możemy tam zobaczyc <b>Treści zapisane w usługach Google</b> oraz <b>Aplikacje i usługi innych firm</b>. Aby zobaczyć szczegółowe dane zwyczajnie klikamy na nazwę aplikacji.</p>
            </div>


            <div className="w-80 h-60 bg-white rounded-lg absolute bottom-1 border-2 left-12 border-gray-800">
                <img src="images/jaksprawdzic2.png" className="w-full h-full rounded-lg"/>
            </div>
        </div>
    );
}