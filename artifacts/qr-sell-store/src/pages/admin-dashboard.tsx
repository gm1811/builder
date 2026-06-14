import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/header";
import { InventoryList } from "@/components/store/inventory-list";
import { getProducts, mockProducts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import type { Product } from "@/lib/types";

export default function AdminDashboardPage() {
    const [products, setProducts] = useState<Product[]>(mockProducts);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getProducts().then(p => { setProducts(p); setLoaded(true); });
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Store Inventory</h1>
                    <Button asChild variant="outline">
                        <Link href="/store/settings" className="flex items-center gap-2">
                            <Settings className="w-4 h-4" />
                            Settings
                        </Link>
                    </Button>
                </div>
                <InventoryList initialProducts={products} />
            </main>
        </div>
    );
}
