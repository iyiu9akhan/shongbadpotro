import Image from "next/image";
import NavLinks from "./NavLinks";

function Header() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="navbar px-0  max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a className="" href="/">
            <Image
              src="/brandLogo.png"
              alt="brand_logo"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
          </a>
          <p className="text-[19px]">{date}</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="hover:text-brand cursor-pointer duration-300 transition-colors">
          সাইন ইন
        </a>
        <a className="btn bg-brand text-white">রেজিস্টার</a>
      </div>
    </div>
  );
}

export default Header;
