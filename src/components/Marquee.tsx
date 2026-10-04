import { MarqueeNews } from "@/types/HomeDataType";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  let headlines: MarqueeNews[] = [];

  try {
    const res = await fetch(
      "https://news-api-v2.vercel.app/api/news?limit=10",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          Accept: "application/json",
          "Accept-Language": "en-US,en;q=0.9",
        },
        next: { revalidate: 300 },
      },
    );

    const type = res.headers.get("content-type") ?? "";
    if (!res.ok || !type.includes("application/json")) {
      throw new Error(`Bad response: ${res.status} ${type}`);
    }

    const data = await res.json();
    headlines = data.data ?? [];
  } catch (error) {
    console.error("Marquee fetch failed:", error);
  }

  if (headlines.length === 0) return null;

  return (
    <div className="bg-brand sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          <p className="px-3 text-white bg-red-800 py-1.5">সর্বশেষ</p>
          <MarqueeText direction="right" duration={15}>
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
