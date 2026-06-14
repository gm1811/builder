import { Header } from "@/components/layout/header";
import { ProductGrid } from "@/components/store/product-grid";
import { getProducts, getProductsByCategory, getStoreSettings } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function StorefrontPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams;
  const products = category ? await getProductsByCategory(category) : await getProducts();
  const settings = await getStoreSettings();
  const categories = ["Shirts", "Pants", "Outerwear", "Shoes"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <section className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
        {settings.bannerImage && (
          <img
            src={settings.bannerImage}
            alt="Store Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </section>

      {/* Floating Store Info Card */}
      <div className="container mx-auto px-4 max-w-5xl -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-center justify-between border border-slate-100">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl font-black text-orange-600 shrink-0">
              QR
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{settings.storeTitle}</h1>
              <p className="text-slate-500 text-sm">{settings.storeSubtitle}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <Button variant="outline" className="rounded-full text-blue-600 border-blue-200 bg-blue-50 font-semibold px-6">
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">What are you going to order today?</h2>
          <div className="flex items-center justify-center space-x-3 overflow-x-auto pb-4 scrollbar-hide">
            <Button variant={!category ? "default" : "outline"} asChild className={`rounded-full shadow-sm font-semibold px-6 ${!category ? 'bg-blue-500 hover:bg-blue-600 text-white border-transparent' : 'text-slate-600 border-slate-200 hover:bg-slate-50'}`}>
              <Link href="/">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                All
              </Link>
            </Button>
            {categories.map((c) => (
              <Button key={c} variant={category === c ? "default" : "outline"} asChild className={`rounded-full shadow-sm font-semibold px-6 ${category === c ? 'bg-blue-500 hover:bg-blue-600 text-white border-transparent' : 'text-slate-600 border-slate-200 hover:bg-slate-50'}`}>
                <Link href={`/?category=${c}`}>{c}</Link>
              </Button>
            ))}
          </div>
        </div>
        <ProductGrid products={products} />
      </main>
    </div>
  );
}
