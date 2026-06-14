"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { updateProductAction } from "@/app/store/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import Image from "next/image";

export function InventoryList({ initialProducts }: { initialProducts: Product[] }) {
    const [products, setProducts] = useState(initialProducts);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleToggleStock = async (product: Product) => {
        const updated = !product.inStock;
        setProducts(products.map(p => p.id === product.id ? { ...p, inStock: updated } : p));
        await updateProductAction(product.id, { inStock: updated });
        toast.success(`${product.name} is now ${updated ? 'in stock' : 'out of stock'}`);
    };

    const handleSaveEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingProduct) return;

        setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
        await updateProductAction(editingProduct.id, {
            name: editingProduct.name,
            price: editingProduct.price,
            image: editingProduct.image,
        });

        setIsDialogOpen(false);
        toast.success(`${editingProduct.name} updated successfully`);
    };

    return (
        <div className="space-y-4">
            {products.map(product => (
                <Card key={product.id}>
                    <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <div className="relative h-16 w-16 rounded overflow-hidden">
                                <Image src={product.image} alt={product.name} fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-sm text-muted-foreground">${product.price.toFixed(2)} - {product.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant={product.inStock ? "outline" : "secondary"}
                                onClick={() => handleToggleStock(product)}
                            >
                                {product.inStock ? "In Stock" : "Out of Stock"}
                            </Button>

                            <Dialog open={isDialogOpen && editingProduct?.id === product.id} onOpenChange={(open) => {
                                if (open) setEditingProduct(product);
                                setIsDialogOpen(open);
                            }}>
                                <DialogTrigger asChild>
                                    <Button variant="default">Edit</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Edit Product</DialogTitle>
                                    </DialogHeader>
                                    {editingProduct && (
                                        <form onSubmit={handleSaveEdit} className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>Name</Label>
                                                <Input
                                                    value={editingProduct.name}
                                                    onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Price</Label>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    value={editingProduct.price}
                                                    onChange={e => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Image URL</Label>
                                                <Input
                                                    value={editingProduct.image}
                                                    onChange={e => setEditingProduct({ ...editingProduct, image: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <Button type="submit" className="w-full">Save Changes</Button>
                                        </form>
                                    )}
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
