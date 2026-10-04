import Link from "next/link";

export const metadata = {
  title: "পাতাটি পাওয়া যায়নি | সংবাদপত্র",
};

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <div className="relative inline-block">
          <h1 className="text-[120px] sm:text-[160px] leading-none font-extrabold text-brand/10 select-none">
            ৪০৪
          </h1>
          <span className="absolute inset-0 flex items-center justify-center text-brand text-5xl sm:text-6xl font-extrabold">
            ৪০৪
          </span>
        </div>

        <div className="w-16 h-1 bg-brand mx-auto mt-4 mb-6 rounded-full" />

        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
          দুঃখিত, পাতাটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="text-black/60 leading-7 mb-8">
          আপনি যে খবর বা পাতাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, অথবা
          লিংকটি ভুল। চিন্তা নেই, নিচের বাটন থেকে হোম পেজে ফিরে যেতে পারেন।
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-md bg-brand text-white font-semibold hover:bg-brand/90 duration-200 transition-all"
          >
            হোম পেজে ফিরুন
          </Link>
          <Link
            href="/category/world"
            className="px-6 py-3 rounded-md border border-gray-300 bg-white text-black font-semibold hover:border-brand hover:text-brand duration-200 transition-all"
          >
            সব বিভাগ দেখুন
          </Link>
        </div>

        <p className="mt-10 text-sm text-black/40">
          ভুল URL: ঠিকানাটি আবার যাচাই করে দেখুন
        </p>
      </div>
    </div>
  );
};

export default NotFound;
