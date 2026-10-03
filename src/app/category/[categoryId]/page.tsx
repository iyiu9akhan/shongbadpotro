import NewsCard from "@/components/NewsCard";
import { homeArticle } from "@/types/HomeDataType";

const CategoryNews = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews: homeArticle[] = data.data;
  //   console.log(data);
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-[25px] font-bold pb-1 mb-5 border-b-2 border-brand">
        {data.title}
      </p>
      <div className="grid grid-cols-3 gap-4">
        {categoryNews.map((news) => (
          <NewsCard news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
