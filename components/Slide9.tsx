
import {FaCheck} from "react-icons/fa";


export default function Slide9() {
    return (
        <div className="flex  flex-col items-center justify-start h-[35rem] rounded-lg border-2 p-8 bg-green-100 bg-opacity-80">
            <h1 className="font-bold text-3xl">Czego dowiedzieliśmy się w trakcie tej prezentacji?</h1>
            <div className="mt-4 w-[75%] h-[90%] bg-gray-500 rounded-xl shadow-2xl flex flex-col p-4 border-2 border-gray-800">
            <p className="font-semibold max-w-[350px] absolute top-28">Czym są dane osobowe i w jaki sposób należy je chronić.</p>
            <FaCheck color="green" className="w-4 h-4 absolute top-[120px] left-[570px]"/>
            <FaCheck color="green" className="w-4 h-4 absolute top-[200px] left-[570px]"/>
            <FaCheck color="green" className="w-4 h-4 absolute top-[275px] left-[570px]"/>
            <FaCheck color="green" className="w-4 h-4 absolute top-[346px] left-[570px]"/>
            <FaCheck color="green" className="w-4 h-4 absolute top-[440px] left-[570px]"/>

            <img src="images/personal5.jpg" className="absolute h-[400px] w-[450px] right-60 rounded-xl"/>




            <p className="font-semibold max-w-[350px] absolute top-44 ">Rzeczywistego znaczenia naszych danych i przestrogi przed ich złym nieodpowiedzialnym wykorzystywaniem.</p>


            <p className="font-semibold max-w-[350px] absolute top-[264px]">Jak wiele informacji posiada o nas nasz telefon oraz aplikacje i jak to sprawdzić.</p>


            <p className="font-semibold max-w-[350px] absolute top-[325px]">Jak możemy się chronić na co dzień i jakie obawy niesie za sobą udostępnianie danych w sieci.</p>


            <p className="font-semibold max-w-[350px] absolute top-[410px]">W jaki sposób może wyglądać niedaleka przyszłość i jakie ułatwienia oraz zagrożenia ze sobą niesie.</p>
            </div>
        </div>
    );
}