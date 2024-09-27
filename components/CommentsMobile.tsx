"use client";

import { FormEvent, useState } from "react";
import CommentCard from "./CommentCard";


const getColor = (color: string) => {
    switch(color) {
        case "Pozytywny":
            return "text-green-500";
        case "Negatywny":
            return "text-red-500";
        case "Neutralny":
            return "text-black";
        default:
            return "text-black";
    }
}


export default function CommentsMobile() {
    const [text, setText] = useState("");
    const [color, setColor] = useState("Neutralny");
    const [submitted, setSubmitted] = useState(false);

    const currentColor = getColor(color);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({text, color})
        });
        if(response.ok) {
            setSubmitted(true);
        }
    }

    const handleColorChange = (color: string) => {
        setColor(color);
    }

    return (
        submitted ? (
          <div className="w-[90%] max-w-[350px] h-[30rem] mx-auto mt-10 p-2 bg-gray-700 border-gray-900 border-4 rounded-xl shadow-2xl" style={{backgroundImage: "url('/images/success.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
            <h1 className="text-lg font-bold text-center">Bardzo dziękujemy za przesłanie swojego komentarza! Powinien się on za chwile pojawić na tablicy!</h1>
          </div>
        ): (
          <div className="w-[90%] max-w-[350px] mx-auto mt-10 p-4 bg-gray-700 border-gray-900 border-4 rounded-xl shadow-2xl">
          <h1 className="text-center font-bold text-lg text-white mb-4">
            Tutaj możesz skomentować naszą pracę!
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Wprowadź zawartość swojego komentarza..."
              maxLength={200}
              className="w-full py-2 px-4 rounded-lg shadow-xl bg-gray-50 border border-gray-900 resize-none focus:outline-none"
              rows={3}
            />
            <h2 className="text-lg font-bold text-center text-white">
              Wybierz typ oceny naszej pracy!
            </h2>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold"
                onClick={() => handleColorChange("Pozytywny")}
              >
                Pozytywny
              </button>
              <button
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-bold"
                onClick={() => handleColorChange("Negatywny")}
              >
                Negatywny
              </button>
              <button
                type="button"
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-bold"
                onClick={() => handleColorChange("Neutralny")}
              >
                Neutralny
              </button>
            </div>
    
            <h2 className="text-lg font-bold text-center text-white mt-4">
              Twój komentarz powinien wyświetlić się w taki sposób:
            </h2>
            <div
              className={`w-full py-2 px-4 rounded-lg shadow-xl bg-gray-50 border border-gray-900 break-words ${getColor(
                color
              )}`}
            >
              {text || "Twoj komentarz pojawi się tutaj..."}
            </div>
    
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600"
              >
                Dodaj komentarz
              </button>
            </div>
          </form>
        </div>
        )
        
      );
}