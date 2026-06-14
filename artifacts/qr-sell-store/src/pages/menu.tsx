import { Suspense, useState, useEffect } from "react";
import { useSearch, Link } from "wouter";
import { Facebook, Instagram, MapPin, Phone, UtensilsCrossed, ChefHat, Cake, Hash, Loader2, Leaf, ClipboardList, ShoppingBag, Wine } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/store/cart";
import { toast } from "sonner";

const categoryIcons: Record<string, React.ReactNode> = {
    entrantes: <UtensilsCrossed className="h-5 w-5" />,
    principales: <ChefHat className="h-5 w-5" />,
    postres: <Cake className="h-5 w-5" />,
    bebidas: <Wine className="h-5 w-5" />,
};

const dietaryTagColors: Record<string, string> = {
    vegetarian: "bg-green-500",
    vegan: "bg-green-600",
    gluten_free: "bg-amber-500",
};

const mockBusinessInfo = {
    name: "Mocked Restaurant",
    description: "Experience the best flavors carefully prepared by our chefs.",
    address: "123 Visual St, Mock City",
    phone: "+1 234 567 890",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    logoUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100",
    bannerUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    categoryNames: {
        entrantes: "Starters",
        principales: "Main Courses",
        postres: "Desserts",
        bebidas: "Drinks",
    },
};

const mockMenuItems = [
    { id: "1", title: "Crispy Calamari", description: "Golden fried calamari rings served with house aioli.", imgSrc: "https://images.unsplash.com/photo-1599487405705-8eb747e06ff4?w=400", price: 12.50, category: "entrantes", dietaryTags: ["dairy_free"], isCombined: false },
    { id: "2", title: "Grilled Ribeye Steak", description: "Premium 12oz ribeye with roasted vegetables.", imgSrc: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400", price: 34.00, category: "principales", dietaryTags: ["gluten_free"], isCombined: false },
    { id: "3", title: "Vegan Burger", description: "Plant-based patty, lettuce, tomato, vegan cheese.", imgSrc: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400", price: 16.00, category: "principales", dietaryTags: ["vegan", "vegetarian"], isCombined: false },
    { id: "4", title: "Cheesecake", description: "New York style cheesecake with strawberry sauce.", imgSrc: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400", price: 8.50, category: "postres", dietaryTags: ["vegetarian"], isCombined: false },
    { id: "5", title: "Craft Beer", description: "Locally brewed IPA.", imgSrc: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400", price: 6.00, category: "bebidas", dietaryTags: [], isCombined: false },
    { id: "6", title: "Combo Meal", description: "Burger, fries, and a drink.", imgSrc: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400", price: 19.99, category: "principales", dietaryTags: [], isCombined: true }
];

function MenuContent() {
    const search = useSearch();
    const params = new URLSearchParams(search);
    const tableNumber = params.get("table") || "001";
    const roomNumber = params.get("room");
    const locationType = roomNumber ? "room" : "table";
    const locationNumber = roomNumber || tableNumber;

    const [isLoading, setIsLoading] = useState(true);
    const addItem = useCartStore((state) => state.addItem);
    const categories = ["entrantes", "principales", "postres", "bebidas"];
    const categoryNames = mockBusinessInfo.categoryNames;

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    function handleAddToCart(item: any) {
        addItem({
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.imgSrc,
            category: item.category,
            inStock: true,
        });
        toast.success(`${item.title} added to cart`);
    }

    function scrollToCategory(categoryId: string) {
        const element = document.getElementById(categoryId);
        if (element) {
            const offset = 80;
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className="relative bg-background text-foreground" style={{ paddingTop: "3.5rem" }}>
                <section className="relative h-48 md:h-64 overflow-hidden">
                    <img
                        src={mockBusinessInfo.bannerUrl}
                        alt="Restaurant"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--background), transparent)" }} />
                </section>

                <section className="container mx-auto px-4 -mt-16 relative z-10 max-w-5xl">
                    <div className="bg-card rounded-2xl shadow-xl p-4 md:p-6 border border-border">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={mockBusinessInfo.logoUrl}
                                    alt="Restaurant Logo"
                                    width={60}
                                    height={60}
                                    className="rounded-xl"
                                />
                                <div className="flex-1 min-w-0">
                                    <h1 className="text-xl font-bold truncate">{mockBusinessInfo.name}</h1>
                                    <p className="text-sm text-muted-foreground">{mockBusinessInfo.description}</p>
                                </div>
                                <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-2 text-base font-bold border-primary text-primary">
                                    <Hash className="h-4 w-4" />
                                    {locationType === "room" ? "Room" : "Table"} {locationNumber}
                                </Badge>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                <Button variant="outline" size="sm" className="gap-2" asChild>
                                    <Link href="/orders">
                                        <ClipboardList className="h-4 w-4" />
                                        View Orders
                                    </Link>
                                </Button>
                                <Button variant="outline" size="sm" className="gap-2 border-orange-200 text-orange-700 hover:bg-orange-50" asChild>
                                    <Link href="/takeaway">
                                        <ShoppingBag className="h-4 w-4" />
                                        Take Away
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm justify-center">
                                <a href={mockBusinessInfo.facebook} className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
                                <a href={mockBusinessInfo.instagram} className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
                                <a href="#" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                                    <MapPin className="h-4 w-4" />
                                    <span className="hidden sm:inline">{mockBusinessInfo.address}</span>
                                </a>
                                <a href={`tel:${mockBusinessInfo.phone}`} className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                                    <Phone className="h-4 w-4" />
                                    <span>{mockBusinessInfo.phone}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-6 max-w-5xl">
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Menu</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((categoryId) => (
                            <button
                                key={categoryId}
                                className="px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all hover:opacity-90 hover:scale-105 bg-primary text-primary-foreground"
                                onClick={() => scrollToCategory(categoryId)}
                            >
                                {categoryIcons[categoryId] || <UtensilsCrossed className="h-5 w-5" />}
                                {categoryNames[categoryId as keyof typeof categoryNames]}
                            </button>
                        ))}
                    </div>
                </section>

                <div className="max-w-5xl mx-auto">
                    {categories.map((categoryId) => {
                        const categoryItems = mockMenuItems.filter(item => item.category === categoryId);
                        if (categoryItems.length === 0) return null;

                        return (
                            <section key={categoryId} id={categoryId} className="container mx-auto px-4 py-6">
                                <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        {categoryIcons[categoryId] || <UtensilsCrossed className="h-5 w-5" />}
                                    </span>
                                    {categoryNames[categoryId as keyof typeof categoryNames]}
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {categoryItems.map((item) => (
                                        <Card key={item.id} className="overflow-hidden bg-card">
                                            <CardContent className="p-0">
                                                <div className="flex gap-4 p-4">
                                                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                                                        <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="flex-1 min-w-0 flex flex-col">
                                                        <h4 className="font-semibold truncate text-foreground">{item.title}</h4>
                                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.description}</p>

                                                        <div className="flex flex-wrap gap-1 mb-2">
                                                            {item.dietaryTags.map(tag => (
                                                                <Badge key={tag} className={`text-xs py-0 text-white ${dietaryTagColors[tag] || 'bg-slate-500'}`}>
                                                                    <Leaf className="h-3 w-3 mr-1" /> {tag.replace('_', ' ')}
                                                                </Badge>
                                                            ))}
                                                        </div>

                                                        <div className="flex items-center justify-between mt-auto">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                                                                {item.isCombined && <Badge variant="outline" className="text-xs">Combo</Badge>}
                                                            </div>
                                                            <button
                                                                className="px-3 py-2 rounded-md text-sm font-medium transition-all hover:opacity-90 hover:scale-105 bg-primary text-primary-foreground"
                                                                onClick={() => handleAddToCart(item)}
                                                            >
                                                                {item.isCombined ? "Customize" : "Add"}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>

                <div className="h-12" />
            </main>
        </>
    );
}

export default function MenuPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
            <MenuContent />
        </Suspense>
    );
}
