"use server";

import { mockVouchers } from "@/lib/mock-data";

export async function checkVoucherAction(code: string) {
    const voucher = mockVouchers.find((v) => v.code.toUpperCase() === code.toUpperCase() && v.active);
    if (!voucher) {
        return { error: "Invalid or expired voucher code" };
    }
    return { voucher };
}
