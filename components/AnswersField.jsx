import { useContext } from "react";
import ChampionGuess from "./ChampionGuess";
import { appContext } from "@/context/AppContext";

const AnswersField = () => {
  const { guessList } = useContext(appContext);

  return (
    <div className="h-full overflow-y-auto flex flex-col items-center gap-y-8">
      {guessList.map((champion) => (
        <ChampionGuess key={champion.name} champion={champion} />
      ))}
    </div>
  );
};

export default AnswersField;
