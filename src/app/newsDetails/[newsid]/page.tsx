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

  const title = newsDetails.title;
  const description =
    newsDetails.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;
  const author = newsDetails.byline?.[0]?.name;
  const published = new Date(newsDetails.firstPublished).toLocaleString(
    "bn-BD",
    {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "UTC",
    },
  );

  return (
    <div className="max-w-2xl mx-auto mt-5 px-3 md:px-0 mb-18">
      <h1 className="text-3xl font-bold leading-snug mb-4">{title}</h1>
      <p className="text-lg text-neutral-600 mb-4">{description}</p>
      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 border-y border-neutral-200 py-3 text-sm text-neutral-500">
        <p>{author}</p>
        <p>{published}</p>
        <span>{newsDetails.wordCount} শব্দ</span>
      </div>
      <div>
        {newsDetails.body.map((body: any, i: number) => {
          if (body.type === "subheading") {
            return (
              <h2 key={i} className="text-xl font-bold mt-9 mb-3">
                {body.text}
              </h2>
            );
          }

          if (body.type === "text") {
            return (
              <p key={i} className="mb-4 leading-relaxed text-neutral-800">
                {/* {body.text.replace(/\n/g, " ").trim()} */}
                {body.text}
              </p>
            );
          }

          if (body.type === "image") {
            return (
              <figure key={i} className="my-6">
                <img
                  src={body.url}
                  alt={body.altText || ""}
                  className="w-full rounded-xl object-cover aspect-video"
                />
                <figcaption className="mt-1 text-sm text-neutral-500">
                  {body.caption}
                  {body.copyrightHolder && ` (${body.copyrightHolder})`}
                </figcaption>
              </figure>
            );
          }
          return null;
        })}
      </div>
      <div className="">
        {newsDetails.tags?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {newsDetails.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FullNews;
