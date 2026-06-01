import AnimateIn from "@/components/AnimateIn";

/* Brand-accurate SVG wordmarks with official colors */
const partners = [
  {
    name: "Schüco",
    sub: "Fenster & Türen",
    logo: (
      <svg viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text
          x="2" y="27"
          fontFamily="'Arial Black', Arial, sans-serif"
          fontSize="24"
          fontWeight="900"
          fill="#003B6F"
          letterSpacing="-0.5"
        >
          Schüco
        </text>
      </svg>
    ),
  },
  {
    name: "REHAU",
    sub: "Kunststoffprofile",
    logo: (
      <svg viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <rect width="100" height="36" fill="#E30613" rx="1"/>
        <text
          x="8" y="26"
          fontFamily="'Arial Black', Arial, sans-serif"
          fontSize="20"
          fontWeight="900"
          fill="white"
          letterSpacing="1"
        >
          REHAU
        </text>
      </svg>
    ),
  },
  {
    name: "Roma",
    sub: "Rollläden",
    logo: (
      <svg viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text
          x="2" y="27"
          fontFamily="'Arial Black', Arial, sans-serif"
          fontSize="26"
          fontWeight="900"
          fill="#1A1A2E"
          letterSpacing="2"
        >
          ROMA
        </text>
      </svg>
    ),
  },
  {
    name: "Neher",
    sub: "Insektenschutz",
    logo: (
      <svg viewBox="0 0 96 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text
          x="2" y="26"
          fontFamily="'Arial Black', Arial, sans-serif"
          fontSize="22"
          fontWeight="900"
          fill="#00843D"
          letterSpacing="0.5"
        >
          NEHER
        </text>
        <rect x="2" y="30" width="82" height="2.5" fill="#00843D"/>
      </svg>
    ),
  },
  {
    name: "Roto",
    sub: "Beschlagtechnik",
    logo: (
      <svg viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text
          x="2" y="27"
          fontFamily="'Arial Black', Arial, sans-serif"
          fontSize="26"
          fontWeight="900"
          fill="#004B93"
          letterSpacing="1"
        >
          Roto
        </text>
      </svg>
    ),
  },
  {
    name: "VEKA",
    sub: "Fensterprofil",
    logo: (
      <svg viewBox="0 0 86 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text
          x="2" y="27"
          fontFamily="'Arial Black', Arial, sans-serif"
          fontSize="26"
          fontWeight="900"
          fill="#003C7E"
          letterSpacing="2"
        >
          VEKA
        </text>
      </svg>
    ),
  },
];

export default function Logos() {
  return (
    <section className="bg-[#EDE8DF] border-t border-[#DDD8CF] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn>
          <p className="text-center text-[10px] font-medium tracking-[0.28em] uppercase text-[#9A9590] mb-10">
            Unsere Markenhersteller
          </p>
        </AnimateIn>

        <AnimateIn delay={1}>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group flex flex-col items-center justify-center gap-2 py-5 px-2 sm:px-4 bg-white border border-[#DDD8CF] hover:border-[#B8965A]/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center justify-center h-9">
                  {p.logo}
                </div>
                <span className="text-[7.5px] sm:text-[9px] text-[#9A9590] uppercase tracking-[0.12em] sm:tracking-[0.18em] text-center font-medium leading-tight break-words w-full">
                  {p.sub}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
