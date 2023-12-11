import data from "@/data/data.json";
const generateRandomChampion = () => {
  const num = Math.floor(Math.random() * (data.length - 1));
  return data[num];
};

export async function GET(request) {
  console.log(request.url);
  const champion = generateRandomChampion();
  console.log(champion);
  return Response.json(champion);
}
