import React from "react";
import type { Section } from "@/types/HomeDataType";
import NewsCard from "./NewsCard";

interface OthersSectionProps {
  othersSection: Section[];
}

const OthersSection = ({ othersSection }: OthersSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto">
      {othersSection.map((os) => (
        <div key={os.curationId}>
          <h1 className="border-b-2 border-brand text-[18px] font-bold pb-2 mb-5">
            {os.title}
          </h1>
          <div className="flex gap-4">
            {os.articles.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OthersSection;
