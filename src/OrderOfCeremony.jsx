import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ceremonyContent = {
  en: {
    title: "Order of Ceremony",
    subtitle:
      "Short, sweet, and holy. We promise to keep the mic time reasonable.",
    list: [
      "Opening Prayer",
      "Welcome",
      "Procession",
      "First Hymn — Amazing Grace",
      "Prayer",
      "Exchange of Vows",
      "Exhortation",
      "Presentation of Certificate",
      "Hymn — Lead us Heavenly Father, Lead us",
      "Benediction",
      "Recessional Song",
      "Recessional Hymn",
    ],
    back: "Back to the Love Story",
  },
  es: {
    title: "Orden de la Ceremonia",
    subtitle:
      "Corto, bonito y con bendición. Prometemos no abusar del micrófono.",
    list: [
      "Oración de apertura",
      "Bienvenida",
      "Procesión",
      "Primer himno — Amazing Grace",
      "Oración",
      "Intercambio de votos",
      "Exhortación",
      "Presentación del certificado",
      "Himno — Guíanos, Padre Celestial, guíanos",
      "Bendición",
      "Canto de salida",
      "Himno de salida",
    ],
    back: "Volver a la historia de amor",
  },
};

const listItemMotion = {
  hidden: { opacity: 0, x: -18 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.06, duration: 0.35, ease: "easeOut" },
  }),
};

export default function OrderOfCeremony({ lang = "en" }) {
  const copy = ceremonyContent[lang] || ceremonyContent.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf5] via-[#fdf8f2] to-[#f8efe7] px-6 pb-20 pt-16 text-slate-700">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <div className="rounded-3xl border border-[#f1e6dc] bg-white/90 p-8 text-center shadow-sm">
          <p className="text-xs uppercase tracking-[0.32em] text-[#c7926b]">
            Wedding Ceremony
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-800">
            {copy.title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">{copy.subtitle}</p>
        </div>

        <div className="rounded-3xl border border-[#f1e6dc] bg-white/85 p-7 shadow-sm">
          <ol className="space-y-3 text-sm text-slate-600">
            {copy.list.map((item, index) => (
              <motion.li
                key={item}
                custom={index}
                variants={listItemMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
              >
                <span className="mr-2 text-[#c7926b]">•</span>
                {item}
              </motion.li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="mx-auto inline-flex items-center justify-center rounded-full border border-[#c7926b] px-5 py-2 text-sm font-semibold text-[#c7926b] transition hover:bg-[#c7926b] hover:text-white"
        >
          {copy.back}
        </Link>
      </div>
    </div>
  );
}
