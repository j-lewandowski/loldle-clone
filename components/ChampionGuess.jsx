import { appContext } from "@/context/AppContext";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

const ChampionGuess = ({ champion }) => {
  const { correctChampion } = useContext(appContext);

  function compare(obj1, obj2) {
    const keys = Object.keys(obj1);
    const fields = keys.map((key) => {
      if (JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])) {
        return "correct";
      } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        const sortedArr1 = obj1[key].slice().sort();
        const sortedArr2 = obj2[key].slice().sort();
        if (JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2)) {
          return "correct";
        } else {
          const intersection = sortedArr1.filter((element) =>
            sortedArr2.includes(element)
          );
          if (intersection.length > 0) {
            return "half-correct";
          } else {
            return "incorrect";
          }
        }
      } else {
        return "incorrect";
      }
    });

    return fields;
  }

  const fields = compare(champion, correctChampion);

  const attrList = () => {
    const list = [];
    Object.keys(champion).forEach((attr, i) => {
      list.push(
        <div
          className={twMerge(
            "aspect-square h-20 text-center items-center justify-center flex flex-col text-white rounded-lg border-2 border-blue-300",
            fields[i] === "correct"
              ? "bg-green-500"
              : fields[i] === "half-correct"
              ? "bg-yellow-600"
              : "bg-rose-600"
          )}
        >
          {Array.isArray(champion[attr])
            ? champion[attr].map((val) => (
                <div key={val + champion.name}>{val}</div>
              ))
            : attr === "release_date"
            ? new Date(champion[attr]).getFullYear()
            : champion[attr]}
        </div>
      );
    });
    return list;
  };

  return <div className="h-16 flex flex-row gap-x-1 w-auto">{attrList()}</div>;
};

export default ChampionGuess;
