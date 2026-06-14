"use server";

import { updateVoucher, addVoucher, deleteVoucher, updateStoreSettings, mockStoreSettings } from "@/lib/mock-data";
import { Voucher } from "@/lib/types";

export async function createVoucherAction(voucher: Omit<Voucher, "id">) {
    const newVoucher = { ...voucher, id: Math.random().toString(36).substring(2, 9) };
    await addVoucher(newVoucher);
    return { success: true };
}

export async function toggleVoucherAction(id: string, active: boolean) {
    await updateVoucher(id, { active });
    return { success: true };
}

export async function deleteVoucherAction(id: string) {
    await deleteVoucher(id);
    return { success: true };
}

export async function updateDomainAction(domain: string) {
    await updateStoreSettings({ customDomain: domain });
    return { success: true };
}

export async function updateStoreSettingsAction(settings: Partial<typeof mockStoreSettings>) {
    await updateStoreSettings(settings);
    return { success: true };
}
