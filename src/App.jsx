import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import Index from "./pages/Index";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  );
}

export default App;
