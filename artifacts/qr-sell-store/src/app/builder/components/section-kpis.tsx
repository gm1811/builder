export function SectionKPIs() {
  const kpis = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.75c-3.176-3.176-8.324-3.176-11.5 0s-3.176 8.324 0 11.5c3.176 3.176 8.324 3.176 11.5 0M4.5 10h7m-7 4h7" />
        </svg>
      ),
      value: '+2 M€',
      label: 'Inversión comprometida',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      ),
      value: '12–18',
      label: 'Meses de plazo medio por operación',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      ),
      value: '8–14%',
      label: 'TIR media estimada al inversor',
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-white border-t border-neutral-900">
      <div className="max-w-[1320px] mx-auto grid grid-cols-3">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className="p-3 sm:p-10 md:p-16 border-r last:border-r-0 border-neutral-900 hover:bg-neutral-950 transition-all duration-300 group"
          >
            <div className="mb-4 sm:mb-10 text-white opacity-60 group-hover:opacity-100 transition-opacity">
              {kpi.icon}
            </div>
            <div className="font-serif text-xl sm:text-6xl md:text-7xl lg:text-8vw font-light tracking-tighter mb-2 sm:mb-4 text-white">
              {kpi.value}
            </div>
            <div className="text-[12px] sm:text-[17px] md:text-[20px] uppercase tracking-[1px] sm:tracking-[2.5px] text-neutral-400 font-medium leading-relaxed max-w-[340px]">
              {kpi.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
