import { notFound } from "next/navigation";

const FullNews = async ({
  params,
}: {
  params: Promise<{ newsid: string }>;
}) => {
  const { newsid } = await params;
  console.log(newsid);
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsid}`,
  );
  const data = await res.json();
  const newsDetails = data.data;

  if (!res.ok) notFound();
  if (!newsDetails) notFound();

  return (
    <div className="max-w-2xl mx-auto mt-5 px-3 md:px-0">
      <h1 className="text-2xl font-bold leading-snug">{newsDetails.title}</h1>
    </div>
  );
};

export default FullNews;
