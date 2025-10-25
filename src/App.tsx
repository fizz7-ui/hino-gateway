import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import AirTickets from "./pages/AirTickets";
import WorkVisas from "./pages/WorkVisas";
import StudentVisas from "./pages/StudentVisas";
import HajjUmrah from "./pages/HajjUmrah";
import TourPackages from "./pages/TourPackages";
import CountriesPage from "./pages/CountriesPage";
import ContactPage from "./pages/ContactPage";
import JapanPage from "./pages/JapanPage";
import SaudiArabiaPage from "./pages/SaudiArabiaPage";
import JobSeekersPage from "./pages/JobSeekersPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/air-tickets" element={<AirTickets />} />
          <Route path="/work-visas" element={<WorkVisas />} />
          <Route path="/student-visas" element={<StudentVisas />} />
          <Route path="/hajj-umrah" element={<HajjUmrah />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/countries/japan" element={<JapanPage />} />
          <Route path="/countries/saudi-arabia" element={<SaudiArabiaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/job-seekers" element={<JobSeekersPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
