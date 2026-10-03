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
      <div className="card-body p-3">
        <p>{news.category}</p>
        <h2 className="card-title line-clamp-2 group-hover:text-brand  duration-200 transition-all">
          {news.title}
        </h2>
        <p className="line-clamp-2 text-black/70">{news.description}</p>
        <p className="text-brand">
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
