import { useState, useEffect } from "react";
import { Voucher } from "@/lib/types";
import { addVoucher, updateVoucher, deleteVoucher, updateStoreSettings } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import QRCode from "qrcode";

interface SettingsClientProps {
    initialVouchers: Voucher[];
    initialDomain: string;
    initialTitle?: string;
    initialSubtitle?: string;
    initialBannerImage?: string;
}

export function SettingsClient({
    initialVouchers,
    initialDomain,
    initialTitle = "",
    initialSubtitle = "",
    initialBannerImage = ""
}: SettingsClientProps) {
    const [vouchers, setVouchers] = useState(initialVouchers);
    const [domain, setDomain] = useState(initialDomain);
    const [storeTitle, setStoreTitle] = useState(initialTitle);
    const [storeSubtitle, setStoreSubtitle] = useState(initialSubtitle);
    const [bannerImage, setBannerImage] = useState(initialBannerImage);
    const [qrCodeUrl, setQrCodeUrl] = useState("");

    const [newCode, setNewCode] = useState("");
    const [newValue, setNewValue] = useState("");
    const [newType, setNewType] = useState<"percentage" | "fixed">("percentage");

    const storeUrl = `https://${domain}.qr-sell-store.com`;

    useEffect(() => {
        QRCode.toDataURL(storeUrl, { width: 300, margin: 2 })
            .then(url => setQrCodeUrl(url))
            .catch(err => console.error(err));
    }, [storeUrl]);

    const handleSaveDomain = async () => {
        await updateStoreSettings({ customDomain: domain });
        toast.success("Domain updated successfully");
    };

    const handleSaveStoreCustomization = async () => {
        await updateStoreSettings({ storeTitle, storeSubtitle, bannerImage });
        toast.success("Store customization saved!");
    };

    const handleAddVoucher = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCode || !newValue) return;

        const newVoucher = {
            id: Math.random().toString(36).substring(2, 9),
            code: newCode.toUpperCase(),
            value: parseFloat(newValue),
            type: newType,
            active: true
        };
        await addVoucher(newVoucher);

        // Optimistic UI update (requires real fetch in a production app)
        setVouchers([...vouchers, {
            id: Math.random().toString(),
            code: newCode.toUpperCase(),
            value: parseFloat(newValue),
            type: newType,
            active: true
        }]);

        setNewCode("");
        setNewValue("");
        toast.success("Voucher created");
    };

    const handleToggleVoucher = async (id: string, active: boolean) => {
        setVouchers(vouchers.map(v => v.id === id ? { ...v, active: !active } : v));
        await updateVoucher(id, { active: !active });
        toast.success("Voucher status updated");
    };

    const handleDeleteVoucher = async (id: string) => {
        setVouchers(vouchers.filter(v => v.id !== id));
        await deleteVoucher(id);
        toast.success("Voucher deleted");
    };

    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Domain Configuration</CardTitle>
                        <CardDescription>Set your custom store subdomain</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Input value={domain} onChange={e => setDomain(e.target.value)} />
                            <span className="text-muted-foreground whitespace-nowrap">.qr-sell-store.com</span>
                        </div>
                        <Button onClick={handleSaveDomain}>Save Domain</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>QR Code</CardTitle>
                        <CardDescription>Scan to visit your store</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        {qrCodeUrl && (
                            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                                <img src={qrCodeUrl} alt="Store QR Code" width={200} height={200} />
                            </div>
                        )}
                        <p className="text-sm font-medium mb-4">{storeUrl}</p>
                        <a href={qrCodeUrl} download="store-qr.png">
                            <Button variant="outline">Download QR Code</Button>
                        </a>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Store Customization</CardTitle>
                        <CardDescription>Personalize your storefront banner and text</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Store Title</Label>
                            <Input value={storeTitle} onChange={e => setStoreTitle(e.target.value)} placeholder="Welcome to QR Sell Store" />
                        </div>
                        <div className="space-y-2">
                            <Label>Store Subtitle</Label>
                            <Input value={storeSubtitle} onChange={e => setStoreSubtitle(e.target.value)} placeholder="Find the best clothes here" />
                        </div>
                        <div className="space-y-2">
                            <Label>Banner Image URL</Label>
                            <Input value={bannerImage} onChange={e => setBannerImage(e.target.value)} placeholder="https://images.unsplash.com/..." />
                        </div>
                        <Button onClick={handleSaveStoreCustomization} className="w-full">Save Customization</Button>
                    </CardContent>
                </Card>
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Vouchers</CardTitle>
                        <CardDescription>Manage your discount codes</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <form onSubmit={handleAddVoucher} className="space-y-4 border p-4 rounded-lg bg-muted/50">
                            <h4 className="font-medium text-sm">Create New Voucher</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Code</Label>
                                    <Input placeholder="e.g. FLASH50" value={newCode} onChange={e => setNewCode(e.target.value)} required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Value</Label>
                                    <Input type="number" placeholder="20" value={newValue} onChange={e => setNewValue(e.target.value)} required />
                                </div>
                                <div className="space-y-2 col-span-2">
                                    <div className="flex space-x-2">
                                        <Button type="button" variant={newType === "percentage" ? "default" : "outline"} className="flex-1" onClick={() => setNewType("percentage")}>Percentage %</Button>
                                        <Button type="button" variant={newType === "fixed" ? "default" : "outline"} className="flex-1" onClick={() => setNewType("fixed")}>Fixed $</Button>
                                    </div>
                                </div>
                            </div>
                            <Button type="submit" className="w-full">Add Voucher</Button>
                        </form>

                        <div className="space-y-4">
                            {vouchers.map(voucher => (
                                <div key={voucher.id} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div>
                                        <p className="font-bold">{voucher.code}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {voucher.value}{voucher.type === 'percentage' ? '%' : '$'} OFF
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant={voucher.active ? "outline" : "secondary"}
                                            size="sm"
                                            onClick={() => handleToggleVoucher(voucher.id, voucher.active)}
                                        >
                                            {voucher.active ? "Active" : "Inactive"}
                                        </Button>
                                        <Button variant="ghost" className="text-red-500" size="sm" onClick={() => handleDeleteVoucher(voucher.id)}>
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            {vouchers.length === 0 && <p className="text-sm text-center text-muted-foreground pt-4">No vouchers created yet.</p>}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
