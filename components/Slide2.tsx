import {BsCardChecklist, BsKey} from "react-icons/bs"
import { FaUser, FaKey, FaPhone, FaAddressBook } from "react-icons/fa";



export default function Slide2() {
    return (
        <div className="flex  flex-col items-center justify-start h-[35rem] rounded-lg border-2 p-8 bg-green-100 bg-opacity-80">
            <div className="h-[16.5rem] rounded-lg w-[40rem] bg-white absolute left-10 top-3 border-2 border-black font-semibold">
                <BsCardChecklist className="h-6 w-6 absolute top-6 left-2"/>
                <p className=" ml-12 border-2 border-gray-700 rounded-xl px-2 mt-[3px] mr-1">Dane osobowe stanowią wszelkie informacje dotyczące zidentyfikowanej lub możliwej do zidentyfikowania żyjącej osoby fizycznej. Poszczególne informacje, które w połączeniu ze sobą mogą prowadzić do zidentyfikowania tożsamości danej osoby, także stanowią dane osobowe.</p>
                <FaUser className="h-6 w-6 absolute top-32 left-2"/>
                <p className=" border-2 border-gray-700 rounded-xl px-2 mt-[1px] mr-1 absolute top-[104px] left-12">Przykładami danych osobowych mogą być zawarte w dowodzie osobistym wszelkie informacje o nas. Służą one do zweryfikowania danego człowieka i nie powinno ich się podawać nikomu niezaufanemu. </p>
                <FaKey className="w-6 h-6 absolute bottom-6 left-2"/>
                <p className="border-2 border-gray-700 rounded-xl px-2   absolute bottom-[2px] left-12">Z danymi osobowymi spotykami się na codzień na przykładzie internetu, w którym to bardzo często jesteśmy proszeni o swoje dane. Kradzież danych w internecie czeka na nas na każdym kroku i musimy być przy tym ostrożni.</p>
            </div>


            <div className="h-[16.5rem]  rounded-lg w-[35rem] absolute right-10 top-3 bg-white border-2 border-black">
                <img src="images/Personal-data-1-1.png" className="w-[98%] ml-1 h-full place-self-center"/>
            </div>



            <div className="h-[16.5rem]  rounded-lg w-[35rem] absolute left-10 bottom-3 border-2 border-black">
                <img src="images/personal-data.png" className="w-[100%] rounded-lg h-full"/>
            </div>



            <div className="h-[16.5rem] bg-white border-2 border-black rounded-lg w-[40rem] absolute right-10 bottom-3 font-semibold">
                <h1 className="text-center font-bold text-xl">Jak chronić swoje dane osobowe?</h1>
                <FaPhone className="w-6 h-6 absolute top-16 left-2"/>
                <p className="border-gray-700 rounded-xl px-2 border-2 absolute top-[28px] left-12 mr-2">Uważaj z kim rozmawiasz. Nie zawsze osoba po drugiej stronie słuchawki przedstawia się za kogoś kim naprawde jest. W ostatnim czasie ludzie często padają ofiarą spoofingu, czyli podszywania się pod czyjś numer telefonu, często także z podrobionym głosem. Zawsze upewniaj się, że wiesz z kim rozmawiasz!</p>
                <FaAddressBook className="w-6 h-6 absolute bottom-12 left-2"/>
                <p className="absolute bottom-1 left-12 border-gray-700 rounded-xl px-2 border-2 mr-2">Ogranicz dostęp do swojego profilu, aby chronić dane osobowe przed niepowołanymi osobami. Sprawdzaj bezpieczne połączenia internetowe. Korzystaj z bezpiecznych, szyfrowanych połączeń, szczególnie w przypadku wysyłania poufnych informacji, takich jak hasła czy dane finansowe.</p>
            </div>
        </div>
    );
}