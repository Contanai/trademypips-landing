import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "@/dashboard/DashboardLayout";
import { LandingDashboardBilling } from "@/dashboard/LandingDashboardBilling";
import { LandingDashboardEaLibrary } from "@/dashboard/LandingDashboardEaLibrary";
import { LandingDashboardEducation } from "@/dashboard/LandingDashboardEducation";
import { LandingDashboardMyEas } from "@/dashboard/LandingDashboardMyEas";
import { LandingDashboardOverview } from "@/dashboard/LandingDashboardOverview";
import { LandingDashboardSettings } from "@/dashboard/LandingDashboardSettings";
import HomePage from "@/pages/HomePage";
import WaitlistPage from "@/pages/WaitlistPage";

/** Must match `base` in vite.config.ts. Strip trailing slash — RR expects `/landing-page`, Vite often gives `/landing-page/`. */
const routerBase = (() => {
  const b = import.meta.env.BASE_URL;
  if (b === "/" || !b) return undefined;
  return b.replace(/\/$/, "");
})();

const App = () => (
  <BrowserRouter basename={routerBase}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/waitlist" element={<WaitlistPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<LandingDashboardOverview />} />
        <Route path="ea-library" element={<LandingDashboardEaLibrary />} />
        <Route path="my-eas" element={<LandingDashboardMyEas />} />
        <Route path="tutorials" element={<LandingDashboardEducation />} />
        <Route path="billing" element={<LandingDashboardBilling />} />
        <Route path="settings" element={<LandingDashboardSettings />} />
      </Route>
      <Route
        path="*"
        element={
          <div className="flex h-screen items-center justify-center bg-background text-on-surface">
            404 — Not Found
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
