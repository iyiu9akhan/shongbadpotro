import { NavItem } from "@/types/HomeDataType";
import Link from "next/link";


const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const allNav: NavItem[] = data.data;
  const filteredNavs = allNav.filter((i) => i.scrapable);

  return (
    <div className="flex gap-4 md:gap-5">
      <Link
        href="/"
        className="hover:text-brand duration-300 transition-colors md:text-[18px]"
      >
        হোম
      </Link>
      {filteredNavs.map((navItem, ind) => (
        <Link
          key={ind}
          href={`/category/${navItem.slug}`}
          className="hover:text-brand duration-300 transition-colors md:text-[18px]"
        >
          {navItem.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
