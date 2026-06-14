"use server";

import { updateProduct } from "@/lib/mock-data";
import { Product } from "@/lib/types";

export async function updateProductAction(id: string, updates: Partial<Product>) {
    await updateProduct(id, updates);
    return { success: true };
}
