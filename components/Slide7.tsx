import { FaLongArrowAltDown, FaKey, FaLock, FaSearch } from "react-icons/fa";




export default function Slide7() {
    return (
        <div className="flex  flex-col items-center justify-start h-[35rem] rounded-lg border-2 p-4 bg-green-100 bg-opacity-80 font-semibold">
            <div className="w-[75%] h-[90%] rounded-xl shadow-2xl bg-white px-48 p-4 border-4 border-gray-400">
                <FaLongArrowAltDown className="w-32 h-32 absolute top-20 rotate-[30deg] left-[400px]"/>
                <FaLongArrowAltDown className="w-32 h-32 absolute top-20 left-[600px]"/>
                <FaLongArrowAltDown className="w-32 h-32 absolute top-20 right-[400px] -rotate-[30deg]"/>
                <h1 className=" text-center font-bold text-2xl">Jakie są ryzyka i obawy?</h1>

                <div className="h-64 bg-gray-500 w-48 rounded-lg bottom-24 absolute left-[345px]">
                    <p className="mt-2 ml-2">Ryzyka jakie niesie za sobą podawanie swoich danych są różne. Jednym z najpoważniejszych z nich jest <b>wyciek danych</b> podczas, których tysiące ludzi zostaja okradzieni ze swoich danych osobowych.</p>
                </div>



                <div className="h-64 bg-gray-500 w-48 rounded-lg bottom-24 absolute left-[572px]">
                    <p className="ml-2 mt-2">Równie istotnym ryzykiem jest podawanie swoich danych na stronach lub aplikacjach, które <b>nie są zaufane</b>. Nie uderza to na wysoką skale ofiar, lecz na pojedyncze osoby, którym może to odebrać tak naprawde wszystko. </p>
                </div>




                <div className="h-64 bg-gray-500 w-48 rounded-lg bottom-24 absolute right-[320px]">
                    <p className="mt-2 ml-2">Obawy z jakimi się spotykamy są przede wszystkim związane z <b>przyszłością naszych danych</b>. Tak naprawde nie wiemy do kogo przez cały ten czas trafiły nasze dane i co te osoby zamierzają z nimi zrobić.</p>
                </div>
            </div>
        </div>
    );
}