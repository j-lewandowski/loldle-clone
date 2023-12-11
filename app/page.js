"use client";
import Image from "next/image";

import AnswersField from "@/components/AnswersField";
import GuessField from "@/components/GuessField";
import CorrectChampion from "@/components/CorrectChampion";
import { useContext, useEffect, useState } from "react";
import { appContext } from "@/context/AppContext";
import { twMerge } from "tailwind-merge";

export default function Main() {
  const { setCorrectChampion, setChampions, reset, guessed } =
    useContext(appContext);

  const fetchData = async () => {
    const resChampion = await fetch("/api/getNewChampion", {
      cache: "no-cache",
    });
    const resChampions = await fetch("/api/getChampions", {
      cache: "no-cache",
    });

    setCorrectChampion(await resChampion.json());
    setChampions(await resChampions.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const restartGame = () => {
    reset();
    fetchData();
  };

  return (
    <div className="h-full flex flex-col items-center gap-y-6">
      <Image
        alt="logo"
        src="/Logo.webp"
        height={300}
        width={400}
        className={twMerge(
          "hover:scale-110 hover:cursor-pointer",
          guessed && "animate-bounce"
        )}
        onClick={restartGame}
      />
      <CorrectChampion />
      <GuessField />
      <AnswersField />
    </div>
  );
}
