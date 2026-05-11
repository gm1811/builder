import { Product, Voucher } from './types';

export let mockProducts: Product[] = [
    { id: "p1", name: "Classic White T-Shirt", price: 25.0, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", category: "Shirts", inStock: true },
    { id: "p2", name: "Denim Straight Jeans", price: 60.0, image: "https://images.unsplash.com/photo-1542272604-780c8dff41dc?w=400&q=80", category: "Pants", inStock: true },
    { id: "p3", name: "Leather Retro Jacket", price: 120.0, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80", category: "Outerwear", inStock: true },
    { id: "p4", name: "Everyday Sneakers", price: 85.0, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80", category: "Shoes", inStock: true }
];

export let mockVouchers: Voucher[] = [
    { id: "v1", code: "SUMMER20", type: "percentage", value: 20, active: true },
    { id: "v2", code: "WELCOME10", type: "fixed", value: 10, active: true }
];

export let mockStoreSettings = {
    customDomain: "my-shop",
    storeTitle: "Welcome to QR Sell Store",
    storeSubtitle: "Find the best clothes here",
    bannerImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
};

export const getProducts = async (): Promise<Product[]> => [...mockProducts];
export const getProductsByCategory = async (category: string): Promise<Product[]> => mockProducts.filter(p => p.category === category);
export const updateProduct = async (id: string, updates: Partial<Product>) => { mockProducts = mockProducts.map(p => p.id === id ? { ...p, ...updates } : p); };

export const getVouchers = async (): Promise<Voucher[]> => [...mockVouchers];
export const addVoucher = async (voucher: Voucher) => { mockVouchers.push(voucher); };
export const updateVoucher = async (id: string, updates: Partial<Voucher>) => { mockVouchers = mockVouchers.map(v => v.id === id ? { ...v, ...updates } : v); };
export const deleteVoucher = async (id: string) => { mockVouchers = mockVouchers.filter(v => v.id !== id); };

export const getStoreSettings = async (): Promise<typeof mockStoreSettings> => ({ ...mockStoreSettings });
export const updateStoreSettings = async (updates: Partial<typeof mockStoreSettings>) => { mockStoreSettings = { ...mockStoreSettings, ...updates }; };
