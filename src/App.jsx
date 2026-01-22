import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroPhoto from "./images/IMG_2675.JPG";
import duoPhoto from "./images/IMG_2681.JPG";

const content = {
  en: {
    languageSwitchLabel: "Language Switch",
    languageOptions: { en: "EN", es: "ES" },
    heroEyebrow: "Wedding Ceremony v1",
    heroPhotoAlt: "Silas and Jocabed smiling together",
    duoPhotoAlt: "Silas and Jocabed portrait",
    hero: {
      title: "Silas finally convinced Jocabed to say 'I Do'",
      subtitle: "Jan 24, 2026 • Big day. Soft smiles. Loud cheers.",
    },
    heroNote:
      "Also: round two is loading in Nigeria. Bring dancing shoes and passport energy.",
    why: {
      title: "Why We're Here",
      body:
        "Honestly? Cake. And maybe Nigerian Jollof at the end... if the caterer didn’t miss a turn. Also, we’re getting married, and Silas is trying not to trip.",
    },
    husbandCredit:
      "Built with ☕ and ❤️ by Silas (The Groom). Version 1.0.0 - No bugs, just features.",
    whoSheIsToMe: {
      title: "Who She Is To Me",
      items: [
        "Her loyalty",
        "Her communication",
        "Her patience with my repeated misunderstandings",
        "Her love for 10/10 intentionality",
        "The mother of our tiny co-pilot (arriving soon)",
        "My number 0 hype woman",
        "My most loyal taste tester when I'm cooking up a storm",
        "The woman of my dreams (and my calendar reminders)",
      ],
    },
    whoSheIsToWorld: {
      title: "Who She Is To Everyone",
      items: [
        "The 'Connective Tissue' of every group",
        "Social bravery",
        "The gift of listening while others just wait to talk",
        "Her fierce loyalty to her Latina roots",
        "The friend who turns group chats into actual plans",
        "The memory drive for everyone's birthdays",
      ],
    },
    loveStack: {
      title: "Our Love Stack (v2.6.0)",
      subtitle:
        "Battle-tested, lightly caffeinated, and shipping joy on schedule.",
      cards: [
        {
          title: "Compatibility",
          body: "100% match. Wi-Fi still buffering sometimes.",
        },
        {
          title: "Conflict Resolution",
          body: "Two commits and a snack. Merge approved.",
        },
        {
          title: "Future Roadmap",
          body:
            "Tiny human, loud laughs, more dancing, plus travel the world, test every new recipe (Silas cooks, Jocabed judges), and collect passport stamps like they're Pokémon.",
        },
      ],
    },
    orderButton:
      "Click here for the Schedule (if Silas remembered to upload it)",
  },
  es: {
    languageSwitchLabel: "Cambiar idioma",
    languageOptions: { en: "EN", es: "ES" },
    heroEyebrow: "Landing de boda v1",
    heroPhotoAlt: "Silas y Jocabed sonriendo juntos",
    duoPhotoAlt: "Retrato de Silas y Jocabed",
    hero: {
      title: "Silas finalmente convenció a Jocabed de decir 'Acepto'",
      subtitle: "24 ene 2026 • Día grande. Sonrisas suaves. Aplausos fuertes.",
    },
    heroNote:
      "Y sí: hay segunda ronda en Nigeria + España. Trae zapatos de baile y energía de pasaporte.",
    why: {
      title: "¿Por qué estamos aquí?",
      body:
        "¿Sinceramente? Pastel. Y quizá jollof nigeriano al final... si el catering no se perdió. También para vernos casar y ver a Silas intentar no tropezarse mientras camina hacia el altar.",
    },
    husbandCredit:
      "Construido con ☕ y ❤️ por Silas (El Novio). Versión 1.0.0 - Sin errores, solo mejoras.",
    whoSheIsToMe: {
      title: "Quién es ella para mí",
      items: [
        "Su lealtad",
        "Su comunicación",
        "Su paciencia con mis despistes",
        "Su amor por la intención total",
        "La mamá de nuestro copiloto mini (en camino)",
        "Mi hype woman número 0",
        "Mi catadora oficial cuando me pongo chef",
        "La mujer de mis sueños (y de mis recordatorios)",
      ],
    },
    whoSheIsToWorld: {
      title: "Quién es ella para todos",
      items: [
        "El 'alma' de cada grupo",
        "Su valentía social",
        "El don de escuchar de verdad",
        "Su lealtad inquebrantable a sus raíces españolas",
        "La que hace que los planes sí pasen",
        "La memoria externa de los cumpleaños",
      ],
    },
    loveStack: {
      title: "Nuestro Love Stack (v2.6.0)",
      subtitle:
        "Probado en producción, con café y entrega puntual de sonrisas.",
      cards: [
        {
          title: "Compatibilidad",
          body: "100% match. El Wi-Fi aún está cargando a ratos.",
        },
        {
          title: "Resolución de conflictos",
          body: "Dos commits y un snack. Merge aprobado.",
        },
        {
          title: "Plan a futuro",
          body:
            "Un mini humano, risas fuertes, mucho baile, más viajes, recetas nuevas (Silas cocina, Jocabed califica) y pasaportes llenos de sellos.",
        },
      ],
    },
    orderButton:
      "Haz clic aquí para el programa (Si Silas se acordó de subirlo)",
  },
};

const listItemMotion = {
  hidden: { opacity: 0, x: -24 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function App() {
  const [lang, setLang] = useState("en");
  const copy = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf5] via-[#fdf8f2] to-[#f8efe7] text-slate-700">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 pt-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {copy.languageSwitchLabel}
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1 text-sm shadow-sm">
          {["en", "es"].map((option) => (
            <button
              key={option}
              onClick={() => setLang(option)}
              className={`rounded-full px-3 py-1 transition ${
                lang === option
                  ? "bg-[#c7926b] text-white shadow"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {copy.languageOptions[option]}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 pb-24 pt-12"
        >
          <section className="grid gap-6 rounded-3xl border border-[#f1e6dc] bg-white/90 p-8 shadow-sm sm:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#c7926b]">
                {copy.heroEyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-semibold text-slate-800 sm:text-4xl">
                {copy.hero.title}
              </h1>
              <p className="mt-4 text-base text-slate-500 sm:text-lg">
                {copy.hero.subtitle}
              </p>
              <p className="mt-3 text-sm text-slate-500">
                {copy.heroNote}
              </p>
              <a
                href="#"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#c7926b] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b37e58] sm:w-auto"
              >
                {copy.orderButton}
              </a>
            </div>
            <div
              className="relative min-h-[240px] overflow-hidden rounded-3xl bg-slate-200"
              style={{
                backgroundImage: `linear-gradient(140deg, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.45)), url(${heroPhoto})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={copy.heroPhotoAlt}
            >
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 px-4 py-3 text-xs text-slate-600 shadow-sm">
                {copy.hero.subtitle}
              </div>
            </div>
          </section>

          <section className="grid gap-8 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-[#f1e6dc] bg-white/80 p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800">
                {copy.why.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {copy.why.body}
              </p>
            </div>
            <div className="rounded-3xl border border-[#f1e6dc] bg-gradient-to-br from-white via-white to-[#fff4ea] p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">
                {copy.whoSheIsToMe.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {copy.whoSheIsToMe.items.map((item, index) => (
                  <motion.li
                    key={item}
                    custom={index}
                    variants={listItemMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-8 sm:grid-cols-[0.85fr_1.15fr]">
            <div
              className="relative min-h-[260px] overflow-hidden rounded-3xl border border-[#f1e6dc] shadow-sm"
              style={{
                backgroundImage: `linear-gradient(140deg, rgba(15, 23, 42, 0.15), rgba(15, 23, 42, 0.55)), url(${duoPhoto})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={copy.duoPhotoAlt}
            />
            <div className="rounded-3xl border border-[#f1e6dc] bg-white/80 p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">
                {copy.whoSheIsToWorld.title}
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {copy.whoSheIsToWorld.items.map((item, index) => (
                  <motion.div
                    key={item}
                    custom={index}
                    variants={listItemMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-[#f1e6dc] bg-white/90 p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">
              {copy.loveStack.title}
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              {copy.loveStack.subtitle}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {copy.loveStack.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-[#fff4ea] px-4 py-4 text-sm text-slate-600 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-[#c7926b]">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm">{card.body}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.main>
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-20 max-w-[240px] rounded-2xl border border-[#f1e6dc] bg-white/90 px-4 py-3 text-xs text-slate-500 shadow-lg">
        {copy.husbandCredit}
      </div>
    </div>
  );
}
