import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Announcement } from "./components/announcement";
import Home from "./pages/home";
import Homepage from "./pages/home-page";

import "./App.css";

function App() {
  const [isServerStatusChecked, setServerStatusChecked] = useState(() => {
    return JSON.parse(localStorage.getItem("isServerStatusChecked")) || false;
  });

  return (
    <>
      {isServerStatusChecked ? (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<AppRoutes />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 2000,
            }}
          />
        </>
      ) : (
        <>
          <Announcement setServerStatusChecked={setServerStatusChecked} />
        </>
      )}
    </>
  );
}

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:page_id" element={<Home />} />
        <Route path="/:page_id/:id" element={<Home />} />
        <Route path="/:page_id/:id/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
