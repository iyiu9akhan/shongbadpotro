import { MostReadItem } from "@/types/HomeDataType";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostRead = data.data;

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h1 className="mb-3 text-[20px] text-black font-semibold">
        সর্বাধিক পঠিত
      </h1>
      {mostRead.map((m: MostReadItem) => (
        <div className="flex mb-3 cursor-pointer group" key={m.id}>
          <p className="text-brand font-bold text-[22px] mr-3">{m.rank}</p>
          <p className="font-semibold group-hover:text-brand duration-200 transition-all">
            {m.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MostRead;
