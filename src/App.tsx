import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import WhoWeAre from "./pages/About/WhoWeAre";
import CoreTeam from "./pages/About/CoreTeam";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import CorporateCultivation from "./pages/FarmingSolutions/CorporateCultivation";
import OrganicFarming from "./pages/FarmingSolutions/OrganicFarming";
import ImportExport from "./pages/FarmingSolutions/ImportExport";
import OrganicFoods from "./pages/FarmingSolutions/OrganicFoods";
import Subsidiaries from "./pages/Subsidiaries/Subsidiaries";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<WhoWeAre />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/core-team" element={<CoreTeam />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/farming-solutions" element={<CorporateCultivation />} />
          <Route path="/farming-solutions/corporate-cultivation" element={<CorporateCultivation />} />
          <Route path="/farming-solutions/organic-farming" element={<OrganicFarming />} />
          <Route path="/farming-solutions/import-export" element={<ImportExport />} />
          <Route path="/farming-solutions/organic-foods" element={<OrganicFoods />} />
          <Route path="/legacy-recognition" element={<WhoWeAre />} />
          <Route path="/legacy-recognition/gallery-testimonials" element={<WhoWeAre />} />
          <Route path="/legacy-recognition/media-videos" element={<WhoWeAre />} />
          <Route path="/legacy-recognition/certifications" element={<WhoWeAre />} />
          <Route path="/subsidiaries" element={<Subsidiaries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
