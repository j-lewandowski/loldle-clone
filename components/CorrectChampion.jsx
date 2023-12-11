import { appContext } from "@/context/AppContext";
import { useContext } from "react";

const CorrectChampion = () => {
  const { guessed, correctChampion } = useContext(appContext);

  return (
    <div className="p-6 border-4 w-96 h-32 border-amber-300 bg-primary text-white rounded-lg flex flex-col items-center justify-center">
      {!guessed ? (
        <>
          <p className="text-lg text-center mb-3 font-semibold">
            Guess today's League of Legends champion!
          </p>
          <p className="text-center text-gray-300">
            Type any champion to begin.
          </p>
        </>
      ) : (
        <div className="flex items-center justify-center flex-col drop">
          <p className="text-xl">You guessed it!</p>
          <span>
            It was <strong>{correctChampion.name}</strong>
          </span>
        </div>
      )}
    </div>
  );
};

export default CorrectChampion;
