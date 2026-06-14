import { Header } from "@/components/layout/header";
import { SettingsClient } from "@/components/store/settings-client";
import { getVouchers, getStoreSettings } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function SettingsPage() {
    const vouchers = await getVouchers();
    const settings = await getStoreSettings();

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
