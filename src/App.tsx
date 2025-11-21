import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FireSuppressionInsurance from "./pages/FireSuppressionInsurance";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
          <Route path="/fire-suppression-system-insurance" element={<FireSuppressionInsurance />} />
          <Route path="/grease-trap-liability-coverage" element={<FireSuppressionInsurance />} />
          <Route path="/equipment-breakdown-insurance" element={<FireSuppressionInsurance />} />
          <Route path="/hood-cleaning-compliance-insurance" element={<FireSuppressionInsurance />} />
          <Route path="/restaurant-hood-insurance" element={<FireSuppressionInsurance />} />
          <Route path="/hotel-kitchen-insurance" element={<FireSuppressionInsurance />} />
          <Route path="/hospital-cafeteria-coverage" element={<FireSuppressionInsurance />} />
          <Route path="/school-kitchen-protection" element={<FireSuppressionInsurance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
