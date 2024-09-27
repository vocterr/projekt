


export default function CommentCard({text, color}: any) {

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
    
    const currentColor = getColor(color);

    return  (
        <div className="w-[70vw] h-32 bg-white text-black p-4 border-2 border-black rounded-xl">
            <p className={`font-semibold break-words ${currentColor}`}>{text}</p>
        </div>
    );
}