"use client";

import { appContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";

const GuessField = () => {
  const [guess, setGuess] = useState("");
  const [suggestedChampions, setSuggestedChampions] = useState([]);
  const { setGuessList, setChampions, champions, guessed } =
    useContext(appContext);

  useEffect(() => {
    if (guess.trim().length > 0) {
      setSuggestedChampions(
        champions.filter((champion) =>
          champion.name.toLowerCase().startsWith(guess.toLowerCase())
        )
      );
    }
  }, [guess]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (suggestedChampions.length > 0 && !guessed) {
      setGuessList((prevState) => [suggestedChampions[0]].concat(prevState));
      setChampions(
        champions.filter((champion) => champion !== suggestedChampions[0])
      );
      setGuess("");
      setSuggestedChampions([]);
    }
  };

  return (
    <form
      className="w-[500px] h-auto flex flex-row gap-3 relative"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="bg-primary h-12 basis-3/4 border-2 border-blue-300 focus:outline-none rounded-lg px-2 text-white"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={guessed}
      />
      <button
        type="submit"
        className="flex-1 border-2 border-amber-300 rounded-lg text-white bg-primary"
        onClick={onSubmit}
      >
        Submit
      </button>
      {guess.length > 0 && (
        <div className="max-h-32 absolute top-[110%] w-full bg-primary overflow-y-auto text-white p-3 rounded-lg z-40">
          {suggestedChampions.length > 0 ? (
            suggestedChampions.map((champion) => (
              <div
                className="p-2 hover:bg-slate-700 rounded-lg"
                onClick={() => {
                  setGuess(champion.name);
                }}
                key={champion.name}
              >
                {champion.name}
              </div>
            ))
          ) : (
            <span>No champion found.</span>
          )}
        </div>
      )}
    </form>
  );
};

export default GuessField;
