"use client";

import { useLanguage } from "@/context/LanguageContext";

const IconArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF8000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 7l-10 10" />
    <path d="M8 7l9 0l0 9" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: "GitHub", href: "https://github.com/miguelmendoza11" },
    { label: "LinkedIn", href: "https://linkedin.com/in/miguel-mendoza-070829311" },
    { label: "Email", href: "mailto:miguelangel11230@gmail.com" },
  ];

  return (
    <footer className="bg-[#D9D9D9]/25 border-t border-[#D9D9D9]">

      {/* Main content */}
      <div className="
        px-4 xs:px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24
        py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12
        flex flex-col sm:flex-row justify-between gap-6 sm:gap-4
      ">
        {/* Left */}
        <div className="flex flex-col gap-2 xs:gap-3 max-w-xs">
          <p className="font-bold text-sm sm:text-base text-gray-800 uppercase tracking-wide">
            Miguel Mendoza
          </p>
          <p className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">
            {t("footer.desc")}
          </p>
        </div>

        {/* Right — links */}
        <div className="flex flex-col gap-2 xs:gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start sm:justify-end gap-2 text-xs sm:text-sm text-gray-600 hover:text-[#FF8000] transition-colors duration-200"
            >
              <span>{link.label}</span>
              <IconArrowUpRight />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#D9D9D9]/60 px-4 xs:px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-3 xs:py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
  <p className="text-xs text-gray-400">
    {t("footer.copyright")}
  </p>

</div>

    </footer>
  );
}