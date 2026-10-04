import MainNews from "@/components/MainNews";
// import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import OthersSection from "@/components/OthersSection";
import { Section } from "@/types/HomeDataType";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();

  // const sections = data.data;
  // const filteredSections = sections.filter(
  //   (section: Section) => section.articles[0].type === "article",
  // );

  // const mainNews = filteredSections[0].articles;
  // const othersSection = filteredSections.slice(1);

  const sections = data.data.map((section: Section) => ({
    ...section,
    articles: section.articles.filter((a) => a.type === "article"),
  }));

  const mainNews = sections[0].articles;
  const othersSection = sections.slice(1);

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
    </div>
  );
}
