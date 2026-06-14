import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/header";
import { SettingsClient } from "@/components/store/settings-client";
import { getVouchers, getStoreSettings } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Voucher } from "@/lib/types";

export default function SettingsPage() {
    const [vouchers, setVouchers] = useState<Voucher[]>([]);
    const [settings, setSettings] = useState({ customDomain: "", storeTitle: "", storeSubtitle: "", bannerImage: "" });

    useEffect(() => {
        Promise.all([getVouchers(), getStoreSettings()]).then(([v, s]) => {
            setVouchers(v);
            setSettings(s);
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/store">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold">Store Settings</h1>
                </div>
                <SettingsClient
                    initialVouchers={vouchers}
                    initialDomain={settings.customDomain}
                    initialTitle={settings.storeTitle}
                    initialSubtitle={settings.storeSubtitle}
                    initialBannerImage={settings.bannerImage}
                />
            </main>
        </div>
    );
}
