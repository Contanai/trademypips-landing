import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import WaitlistPage from "@/pages/WaitlistPage";

const routerBase = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL;

const App = () => (
  <BrowserRouter basename={routerBase}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/waitlist" element={<WaitlistPage />} />
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
