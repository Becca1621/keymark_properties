
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PropertyDetails from "./pages/PropertyDetails";
import BookTour from "./pages/BookTour";
import AmenitiesPage from "./pages/AmenitiesPage";
import ScrollManager from "./components/ScrollManager";

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/book-tour" element={<BookTour />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster richColors position="top-center" />
    </BrowserRouter>
  );
}

export default App;
