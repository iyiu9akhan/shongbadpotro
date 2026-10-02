import Link from "next/link";

interface NavItem {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const allNav: NavItem[] = data.data;
  const filteredNavs = allNav.filter((i) => i.scrapable);

  return (
    <div className="flex gap-5 justify-center">
      <Link
        href="./"
        className="hover:text-brand duration-300 transition-colors text-[18px]"
      >
        হোম
      </Link>
      {filteredNavs.map((navItem, ind) => (
        <Link
          key={ind}
          href={navItem.slug}
          className="hover:text-brand duration-300 transition-colors text-[18px]"
        >
          {navItem.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
