import { homeArticle } from "@/types/HomeDataType";
import Image from "next/image";

interface NewsCardProps {
  news: homeArticle;
}
const NewsCard = ({ news }: NewsCardProps) => {
  console.log(news);
  return (
    <div>
      <div className="card">
        <figure>
          <Image
            src={news.imageUrl}
            height={600}
            width={600}
            alt={news.imageAlt}
          />
        </figure>
        <div className="card-body">
          <p>{news.category}</p>
          <h2 className="card-title">{news.title}</h2>
          <p>{news.description}</p>
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
    </div>
  );
};

export default NewsCard;
