import { MarqueeNews } from "@/types/HomeDataType";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";


const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  
  const data = await res.json();
  const headlines: MarqueeNews[] = data.data;
  return (
    <div className="bg-brand sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          <p className="px-3 text-white bg-red-800 py-1.5">সর্বশেষ</p>
          <MarqueeText direction="right" duration={20}>
            {headlines.map((headline) => (
              <span key={headline.id} className="flex items-center">
                <Link
                  href={`/newsDetails/${headline.id}`}
                  className="text-white my-1.5 hover:underline underline-offset-4"
                >
                  {headline.title}
                </Link>
                <span className="mx-5 text-white">•</span>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;