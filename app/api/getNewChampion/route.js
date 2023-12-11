import data from "@/data/data.json";
const generateRandomChampion = () => {
  const num = Math.floor(Math.random() * (data.length - 1));
  return data[num];
};

export async function GET() {
  const champion = generateRandomChampion();
  return Response.json(champion);
}
