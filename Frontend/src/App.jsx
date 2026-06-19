import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import ProviderList from "./Components/ProviderList";
import ChatBot from "./Components/ChatBot";
import ProviderDetails from "./pages/ProviderDetails";

function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <h1>All Providers</h1>

        <p>
          One platform connecting you to trusted
          healthcare clinics and wellness services.
        </p>
      </section>

      <ProviderList />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/provider/:id"
          element={<ProviderDetails />}
        />
      </Routes>

      {/* Chatbot stays visible on all pages */}
      <ChatBot />

    </BrowserRouter>
  );
}

export default App;