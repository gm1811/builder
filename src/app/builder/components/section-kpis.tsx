export function SectionKPIs() {
  const kpis = [
    {
      num: 'I',
      value: '+2 M€',
      label: 'Inversión comprometida',
    },
    {
      num: 'II',
      value: '12–18',
      label: 'Meses de plazo medio por operación',
    },
    {
      num: 'III',
      value: '8–14%',
      label: 'TIR media estimada al inversor',
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-white border-t border-neutral-900">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className="p-10 md:p-16 border-b md:border-b-0 border-neutral-900 md:border-r last:border-r-0 hover:bg-neutral-950 transition-all duration-300 group"
          >
            <div className="font-serif text-sm text-neutral-600 tracking-widest mb-10 transition-colors group-hover:text-neutral-450">
              — {kpi.num}
            </div>
            <div className="font-serif text-6xl md:text-7xl lg:text-8vw font-light tracking-tighter mb-4 text-white">
              {kpi.value}
            </div>
            <div className="text-xs uppercase tracking-[2.5px] text-neutral-400 font-medium leading-relaxed max-w-[200px]">
              {kpi.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
