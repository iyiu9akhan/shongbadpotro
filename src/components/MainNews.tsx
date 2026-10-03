import { homeArticle } from "@/types/HomeDataType";
import Image from "next/image";

interface MainNewsProps {
  news: homeArticle[];
}

const MainNews = ({ news }: MainNewsProps) => {
  const [firstNews, ...othersNews] = news;
  return (
    <div className="grid gap-4 grid-cols-2 mb-10 ">
      <div className="card rounded-lg border border-gray-200 cursor-pointer group hover:border-red-200 duration-200 transition-all hover:shadow-sm">
        <figure>
          <Image
            className="group-hover:scale-105  duration-200 transition-all"
            src={firstNews.imageUrl}
            height={600}
            width={600}
            alt={firstNews.imageAlt}
          ></Image>
        </figure>
        <div className="card-body ">
          <p className="text-brand">{firstNews.category}</p>
          <h2 className="card-title text-[22px] group-hover:text-brand  duration-200 transition-all">
            {firstNews.title}
          </h2>
          <p className="line-clamp-3">{firstNews.description}</p>
          <p className="text-brand">
            {new Date(firstNews.firstPublished).toLocaleString("bn-BD", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-200">
        {othersNews.slice(0, 4).map((others) => (
          <div
            key={others.id}
            className="cursor-pointer hover:bg-gray-50 p-4 border-b border-gray-200 last:border-b-0"
          >
            <p className="text-brand text-sm">{others.category}</p>
            <p className="font-semibold text-md">{others.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
