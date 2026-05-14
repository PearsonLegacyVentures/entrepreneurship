import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Entrepreneurship from "./pages/Entrepreneurship";
import Playbooks from "./pages/Playbooks";
import PlaybookDetail from "./pages/PlaybookDetail";
import Templates from "./pages/Templates";
import Tools from "./pages/Tools";
import FounderNotes from "./pages/FounderNotes";
import About from "./pages/About";
import StartHere from "./pages/StartHere";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
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
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/playbooks" element={<Playbooks />} />
          <Route path="/playbooks/:slug" element={<PlaybookDetail />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/founder-notes" element={<FounderNotes />} />
          <Route path="/about" element={<About />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/services" element={<Contact />} />
          <Route path="/work" element={<FounderNotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
