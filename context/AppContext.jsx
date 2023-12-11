"use client";

import { createContext, useState } from "react";

export const appContext = createContext({
  correctChampion: {},
  champions: [],
  guessList: [],
  guessed: false,
});

export default function AppContextProvider({ children }) {
  const [correctChampion, setCorrectChampion] = useState({});
  const [champions, setChampions] = useState([]);
  const [guessList, setGuessList] = useState([]);
  const [guessed, setGuessed] = useState(false);

  const reset = () => {
    setCorrectChampion({});
    setChampions([]);
    setGuessList([]);
    setGuessed(false);
  };

  return (
    <appContext.Provider
      value={{
        correctChampion,
        setCorrectChampion,
        champions,
        setChampions,
        guessList,
        setGuessList,
        guessed,
        setGuessed,
        reset,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
