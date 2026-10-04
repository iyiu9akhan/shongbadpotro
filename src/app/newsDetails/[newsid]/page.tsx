const FullNews = async ({ params }: { params: { newsid: string } }) => {
  const { newsid } = await params;
  console.log(newsid);
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsid}`,
  );
  const data = await res.json();
  const newDetails = data.data;

  console.log(newDetails);

  return (
    <div className="max-w-2xl mx-auto mt-5">
      <h1 className="text-2xl font-bold leading-snug">{newDetails.title}</h1>
    </div>
  );
};

export default FullNews;
