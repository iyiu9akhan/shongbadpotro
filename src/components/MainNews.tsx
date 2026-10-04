import { homeArticle } from "@/types/HomeDataType";
import Image from "next/image";
import Link from "next/link";

interface MainNewsProps {
  news: homeArticle[];
}

const MainNews = ({ news }: MainNewsProps) => {
  const articles = news.filter((item) => !item.isLive);
  const [firstNews, ...othersNews] = articles;

  // console.log("HERO:", JSON.stringify(firstNews, null, 2));
  // console.log("OTHER:", JSON.stringify(othersNews[0], null, 2));

  return (
    <div className="grid gap-4 md:grid-cols-2 mb-10 mt-5 mx-3 md:mx-0">
      <Link href={`/newsDetails/${firstNews.id}`}>
        <div className="card rounded-lg border border-gray-200 cursor-pointer group hover:border-red-200 duration-200 transition-all hover:shadow-sm bg-white">
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
      </Link>
      <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
        {othersNews.slice(0, 4).map((others) => (
          <Link key={others.id} href={`/newsDetails/${others.id}`}>
            <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 md:py-4 border-b border-gray-200 last:border-b-0">
              <p className="text-brand text-sm">{others.category}</p>
              <p className="font-semibold text-md">{others.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
