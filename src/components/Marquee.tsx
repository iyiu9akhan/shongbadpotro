import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}
const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines: NewsItem[] = data.data;
  return (
    <div className="bg-brand">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          <p className="px-3 text-white bg-red-800 py-1.5">সর্বশেষ</p>
          <MarqueeText direction="right" duration={15}>
            {headlines.map((headline) => (
              <p key={headline.id} className="text-white my-1.5">
                {" "}
                <span>{headline.title}</span>
                <span className="mx-5">•</span>
              </p>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
