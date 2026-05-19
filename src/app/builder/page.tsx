import { RevitaNav } from './components/revita-nav';
import { SectionHero } from './components/section-hero';
import { SectionKPIs } from './components/section-kpis';
import { SectionLead } from './components/section-lead';
import { SectionVertical } from './components/section-vertical';
import { SectionModels } from './components/section-models';
import { SectionProjects } from './components/section-projects';
import { SectionCompare } from './components/section-compare';
import { RevitaFooter } from './components/revita-footer';

export default function BuilderPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-black selection:text-white">
      <RevitaNav />
      <SectionHero />
      <SectionKPIs />
      <SectionLead />
      <SectionVertical />
      <SectionModels />
      <SectionProjects />
      <SectionCompare />
      <RevitaFooter />
    </main>
  );
}
