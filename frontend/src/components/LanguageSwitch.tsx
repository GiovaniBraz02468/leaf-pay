import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import UKFlag from "@/assets/icons/uk.png";
import BrasilFlag from "@/assets/icons/brasil.png";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = i18n.language.startsWith("en") ? "en" : "pt";
  const flag = currentLang === "en" ? UKFlag : BrasilFlag;

  // fechar ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(lang: string) {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative w-23">
      {/* TRIGGER */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="select-trigger"
      >
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <img
            src={flag}
            alt="flag"
            className="w-4 h-4 rounded-sm object-cover"
          />
          {currentLang === "en" ? "EN" : "PT"}
        </div>

        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="select-dropdown">
          <button onClick={() => handleChange("en")} className="select-item">
            <img
              src={UKFlag}
              alt="flag"
              className="w-4 h-4 rounded-sm object-cover"
            />
            EN
          </button>

          <button onClick={() => handleChange("pt")} className="select-item">
            <img
              src={BrasilFlag}
              alt="flag"
              className="w-4 h-4 rounded-sm object-cover"
            />
            PT
          </button>
        </div>
      )}
    </div>
  );
}
