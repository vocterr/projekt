



export default function Slide8() {
    return (
        <div className="flex  flex-col items-center justify-start h-[35rem] rounded-lg border-2 p-8 bg-green-100 bg-opacity-80 font-semibold">
            <div className="w-[75%] h-[90%] bg-gray-300 rounded-xl shadow-2xl border-2 border-blue-500">
                <h1 className="absolute top-16 left-60 font-bold text-2xl">Przyszłość prywatności w smartfonach.</h1>
                <div className="bg-blue-500 rounded-xl w-[500px] h-[150px] absolute top-28 ml-4">
                    <p className="ml-2 mt-1">Technologia nieustannie się rozwija. Wchodzą w życie coraz to bardziej <b>usprawnione metody ochrony naszych danych</b>. Niestety z rozwojem idzie także niepewność dotycząca nowych rzeczy, którymi jesteśmy obładowywani. Nie wiemy jaka czeka nas przyszłość, lecz musimy patrzeć na nowe technologie dotyczące prywatności z przymrużeniem oka.</p>
                </div>



                <div className="bg-orange-400 rounded-xl w-[500px] h-[200px] absolute bottom-[90px] ml-4">
                    <p className="ml-2 mt-1">Ogromny lęk niesie za nami tempo rozwoju <b>sztucznej inteligencji</b>, które przez ostatnie lata diametralnie przyspieszyło. Sztuczna inteligencja bywa dla nas bardzo przydatna w codziennym życiu, lecz w momencie przyznania jej dostępu do naszych danych, może być to naprawde niepokojące, co ma miejsce w przypadku firmy Apple, która przedstawiła model AI, który potrafiłby wyszukać zdjęcie z naszej galerii na podstawie opisu tego zdjęcia, co może świadczyć o tym, że wie ono o nas naprawde sporo.</p>
                </div>

                <img src="images/ai.jpg" className="w-96 h-[250px] absolute right-52 top-32 rounded-xl"/>
            </div>
        </div>
    );
}