import { Product } from "@/lib/types";
import { useCartStore } from "@/store/cart";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductGridProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = (product: Product) => {
        addItem(product);
        toast.success(`${product.name} added to cart`);
    };

    return (
        <div className="flex flex-col gap-6 py-6">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 bg-blue-100 p-2 rounded-full shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2a8 8 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg>
                </span>
                <h2 className="text-xl font-bold text-slate-800">All Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product) => (
                    <Card key={product.id} className="flex flex-row overflow-hidden w-full rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md bg-white p-3 gap-4">
                        <div className="relative h-28 w-28 shrink-0">
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 justify-between py-1">
                            <div>
                                <CardTitle className="text-[15px] font-semibold text-slate-800 leading-tight mb-1">{product.name}</CardTitle>
                                <p className="text-[13px] text-slate-500 line-clamp-2 leading-snug">
                                    Delicious and high-quality {product.category.toLowerCase()} perfect for your everyday needs.
                                </p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-200 text-slate-500">{product.category}</span>
                                    {product.inStock && <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">In Stock</span>}
                                </div>
                            </div>
                            <div className="flex items-end justify-between mt-2">
                                <span className="font-bold text-blue-600 text-base">${product.price.toFixed(2)}</span>
                                <Button
                                    onClick={() => handleAddToCart(product)}
                                    disabled={!product.inStock}
                                    size="sm"
                                    className="rounded-full bg-[#3b82f6] hover:bg-blue-600 text-white font-medium px-5 h-8 text-[13px] shadow-sm transition-transform active:scale-95"
                                >
                                    Add
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
