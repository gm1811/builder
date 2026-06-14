"use client";

import Link from "next/link";
import { ShoppingCart, LogIn, Store } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";

export function Header() {
    const totalItems = useCartStore((state) => state.totalItems());

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center mx-auto px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <Store className="h-6 w-6" />
                    <span className="font-bold sm:inline-block">QR Sell Store</span>
                </Link>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <Link href="/checkout">
                            <Button variant="outline" size="icon" className="relative">
                                <ShoppingCart className="h-5 w-5" />
                                {totalItems > 0 && (
                                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground font-bold">
                                        {totalItems}
                                    </span>
                                )}
                            </Button>
                        </Link>
                        <Link href="/store">
                            <Button variant="ghost" size="icon" title="Sign in as Owner">
                                <LogIn className="h-5 w-5" />
                            </Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
