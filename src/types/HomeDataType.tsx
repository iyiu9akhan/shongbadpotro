export interface MostReadItem {
  id: string;
  title: string;
  description: string | null;
  link: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string | null;
  source: string;
  rank: number;
}

export interface homeArticle {
  id: string;
  title: string;
  description: string;
  link: string | null;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

export interface Section {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: homeArticle[];
}

