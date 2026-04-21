"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_ID = "service_1yf6yut";
const TEMPLATE_ID = "template_7rskus3";
const PUBLIC_KEY = "CjhZPs5QnQrJeeBeH";

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
    <path d="M3 7l9 6l9 -6" />
  </svg>
);

const IconWorld = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a17 17 0 0 1 0 18" />
  </svg>
);

const IconSend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 14l11 -11" />
    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
  </svg>
);

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert(t("contact.form.required"));
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    { icon: <IconMail />, label: t("contact.email"), value: "miguelangel11230@gmail.com", href: "mailto:miguelangel11230@gmail.com", img: null },
    { icon: null, label: "GitHub", value: "miguelmendoza11", href: "https://github.com/miguelmendoza11", img: "/GitHub.png" },
    { icon: null, label: "LinkedIn", value: "miguel-mendoza-070829311", href: "https://linkedin.com/in/miguel-mendoza-070829311", img: "/linkedi.png" },
    { icon: <IconWorld />, label: t("contact.location"), value: "Colombia", href: "https://maps.app.goo.gl/qT54zbVSQgiaBT3c9", img: null },
  ];

  const reasons = [t("contact.reason1"), t("contact.reason2"), t("contact.reason3")];

  return (
    <section
      id="contact"
      className="bg-white px-4 xs:px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
    >
      {/* Title */}
      <div className="flex flex-col items-center mb-4 xs:mb-5 sm:mb-6">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight text-center">
          {t("contact.title")}
        </h2>
        <div className="w-16 h-2 bg-[#FF8000] mt-3 rounded-full" />
      </div>

      <p className="text-center text-xs xs:text-sm sm:text-base text-gray-500 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
        {t("contact.subtitle")}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">

        <div className="flex flex-col gap-4 xs:gap-5">
          <div className="border border-gray-200 rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base md:text-lg text-[#FF8000] mb-3 sm:mb-4">
              {t("contact.info")}
            </h3>
            <div className="flex flex-col gap-2 xs:gap-3">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-3 border border-gray-100 rounded-xl p-2.5 xs:p-3 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="bg-[#FF8000] w-8 h-8 xs:w-9 xs:h-9 rounded-lg flex items-center justify-center shrink-0">
                    {item.img ? (
                      <Image src={item.img} alt={item.label} width={20} height={20} className="object-contain" />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-700 truncate">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-2 sm:mb-3">
              {t("contact.why")}
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {reasons.map((r) => (
                <div key={r} className="flex flex-row items-center gap-2">
                  <span className="text-[#FF8000] shrink-0">●</span>
                  <span className="text-xs sm:text-sm text-gray-600">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-sm flex flex-col gap-3 xs:gap-4">
          <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">
            {t("contact.form.title")}
          </h3>

          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-gray-700">{t("contact.form.name")}</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.form.namePlaceholder")}
              className="border border-gray-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:border-[#FF8000] transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-gray-700">{t("contact.form.email")}</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.form.emailPlaceholder")}
              className="border border-gray-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:border-[#FF8000] transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-gray-700">{t("contact.form.message")}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.form.messagePlaceholder")}
              rows={4}
              className="border border-gray-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:border-[#FF8000] transition-colors duration-200 resize-none"
            />
          </div>

          {status === "success" && (
            <p className="text-xs sm:text-sm text-green-600 font-semibold text-center">
              {t("contact.form.success")}
            </p>
          )}
          {status === "error" && (
            <p className="text-xs sm:text-sm text-red-500 font-semibold text-center">
              {t("contact.form.error")}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className={`flex flex-row items-center justify-center gap-2 text-white px-4 xs:px-6 py-2.5 xs:py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors duration-200 w-full mt-1
              ${status === "sending" ? "bg-orange-300 cursor-not-allowed" : "bg-[#FF8000] hover:bg-orange-600"}`}
          >
            <IconSend />
            {status === "sending" ? t("contact.form.sending") : t("contact.form.send")}
          </button>
        </div>

      </div>
    </section>
  );
}