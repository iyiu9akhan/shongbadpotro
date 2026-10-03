import MainNews from "@/components/MainNews";
// import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import OthersSection from "@/components/OthersSection";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const othersSection = sections.slice(1);
  console.log(othersSection);

  return (
    <div>
      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-8">
        <div className="col-span-2">
          <MainNews news={mainNews} />
          <OthersSection othersSection={othersSection} />
        </div>
        <div className="col-span-1">
          <MostRead />
        </div>
      </div>
      {/* <div>
        <OthersSection othersSection={othersSection} />
      </div> */}
    </div>
  );
}
