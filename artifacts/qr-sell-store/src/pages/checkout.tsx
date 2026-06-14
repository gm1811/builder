import { useState } from "react";
import { Header } from "@/components/layout/header";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { mockVouchers } from "@/lib/mock-data";
import type { Voucher } from "@/lib/types";

function checkVoucher(code: string): { voucher?: Voucher; error?: string } {
    const voucher = mockVouchers.find((v) => v.code.toUpperCase() === code.toUpperCase() && v.active);
    if (!voucher) {
        return { error: "Invalid or expired voucher code" };
    }
    return { voucher };
}

export default function CheckoutPage() {
    const { items, totalPrice, clearCart, removeItem, updateQuantity } = useCartStore();
    const [voucherCode, setVoucherCode] = useState("");
    const [appliedVoucher, setAppliedVoucher] = useState<Voucher | null>(null);

    const subtotal = totalPrice();

    const discountAmount = appliedVoucher
        ? appliedVoucher.type === "percentage"
            ? subtotal * (appliedVoucher.value / 100)
            : appliedVoucher.value
        : 0;

    const finalTotal = Math.max(0, subtotal - discountAmount);

    const handleApplyVoucher = () => {
        if (!voucherCode.trim()) return;
        const result = checkVoucher(voucherCode);
        if (result.error) {
            toast.error(result.error);
        } else if (result.voucher) {
            setAppliedVoucher(result.voucher);
            toast.success("Voucher applied successfully!");
        }
    };

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        if (items.length === 0) {
            toast.error("Your cart is empty");
            return;
        }
        toast.success("Order placed successfully!");
        clearCart();
        setAppliedVoucher(null);
        setVoucherCode("");
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Customer Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" required placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" required placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="address">Shipping Address</Label>
                                        <Input id="address" required placeholder="123 Main St, City, Country" />
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {items.length === 0 ? (
                                    <p className="text-muted-foreground">Your cart is empty.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {items.map((item) => (
                                            <div key={item.id} className="flex justify-between items-center">
                                                <div className="flex items-center space-x-4">
                                                    <div>
                                                        <p className="font-medium">{item.name}</p>
                                                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} x {item.quantity}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                                                    <span className="w-4 text-center">{item.quantity}</span>
                                                    <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                                                    <Button variant="ghost" size="sm" className="text-red-500" onClick={() => removeItem(item.id)}>Remove</Button>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="border-t pt-4">
                                            <div className="flex justify-between mb-2">
                                                <span>Subtotal</span>
                                                <span>${subtotal.toFixed(2)}</span>
                                            </div>

                                            <div className="flex space-x-2 mb-4">
                                                <Input
                                                    placeholder="Voucher code"
                                                    value={voucherCode}
                                                    onChange={(e) => setVoucherCode(e.target.value)}
                                                    disabled={!!appliedVoucher}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                    onClick={appliedVoucher ? () => setAppliedVoucher(null) : handleApplyVoucher}
                                                >
                                                    {appliedVoucher ? "Remove" : "Apply"}
                                                </Button>
                                            </div>

                                            {appliedVoucher && (
                                                <div className="flex justify-between text-green-600 mb-2">
                                                    <span>Discount ({appliedVoucher.code})</span>
                                                    <span>-${discountAmount.toFixed(2)}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between font-bold text-xl border-t pt-4">
                                                <span>Total</span>
                                                <span>${finalTotal.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter>
                                <Button form="checkout-form" type="submit" className="w-full" size="lg" disabled={items.length === 0}>
                                    Complete Purchase - ${finalTotal.toFixed(2)}
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
