import { homeArticle } from "@/types/HomeDataType";
import Image from "next/image";

interface NewsCardProps {
  news: homeArticle;
}
const NewsCard = ({ news }: NewsCardProps) => {
  console.log(news);
  return (
    <div className="card border border-gray-200 group cursor-pointer hover:border-red-200 duration-200 transition-all hover:shadow-sm">
      <figure>
        <Image
          src={news.imageUrl}
          height={600}
          width={600}
          alt={news.imageAlt}
          className="hover:scale-105 duration-200 transition-all aspect-video"
        />
      </figure>
      <div className="p-3">
        <p className="text-brand text-sm mb-2">{news.category}</p>
        <h2 className="text-lg font-bold group-hover:text-brand  duration-200 transition-all mb-2 line-clamp-2">
          {news.title}
        </h2>
        <div className="overflow-hidden">
          <p className="line-clamp-2 leading-6 text-black/70 mb-3">
            {news.description}
          </p>
        </div>
        <p className="text-brand text-sm">
          {new Date(news.firstPublished).toLocaleString("bn-BD", {
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
  );
};

export default NewsCard;
