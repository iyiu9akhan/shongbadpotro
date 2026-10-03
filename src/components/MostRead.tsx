import { MostReadItem } from "@/types/HomeDataType";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostRead = data.data;


  return (
    <div>
      {mostRead.map((m: MostReadItem) => (
        <div className="flex" key={m.id}>
          <p>{m.rank}</p>
          <p>{m.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MostRead;
