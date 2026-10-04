import { MostReadItem } from "@/types/HomeDataType";
import Link from "next/link";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostRead: MostReadItem[] = data.data.filter(
    (item: MostReadItem) => !item.isLive,
  );

  return (
    <div className="rounded-lg border border-gray-200 p-4 mt-5 bg-white">
      <h1 className="mb-3 text-[20px] text-black font-semibold">
        সর্বাধিক পঠিত
      </h1>
      {mostRead.map((m) => (
        <Link key={m.id} href={`/newsDetails/${m.id}`} className="block">
          <div className="flex mb-3 cursor-pointer group">
            <p className="text-brand font-bold text-[22px] mr-3">{m.rank}</p>
            <p className="font-semibold group-hover:text-brand duration-200 transition-all">
              {m.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MostRead;