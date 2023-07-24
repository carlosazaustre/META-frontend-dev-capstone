import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingsPage from "./pages/BookingsPage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookings" element={<BookingsPage />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
