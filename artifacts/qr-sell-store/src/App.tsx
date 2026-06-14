import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { Toaster } from "sonner";
import StorefrontPage from "@/pages/storefront";
import CheckoutPage from "@/pages/checkout";
import MenuPage from "@/pages/menu";
import AdminDashboardPage from "@/pages/admin-dashboard";
import SettingsPage from "@/pages/settings";
import BuilderPage from "@/app/builder/page";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={StorefrontPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/store" component={AdminDashboardPage} />
      <Route path="/store/settings" component={SettingsPage} />
      <Route path="/builder" component={BuilderPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
      <Toaster richColors />
    </WouterRouter>
  );
}

export default App;
