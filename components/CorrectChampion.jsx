const CorrectChampion = ({ guessed }) => {
  return (
    <div className="p-6 border-4 w-96 h-32 border-amber-300 bg-primary text-white rounded-lg flex flex-col items-center justify-center">
      <p className="text-lg text-center mb-3 font-semibold">
        Guess today's League of Legends champion!
      </p>
      <p className="text-center text-gray-300">Type any champion to begin.</p>
    </div>
  );
};

export default CorrectChampion;
