import { useState } from "react";
import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Router, Routes } from "react-router-dom";
import HomeDashy from "../dashboard";
import "./dashy.css";
import Team from "./Team";
import Invoices from "./Invoices";
import Form from "./Form";
import FAQ from "./Faq";
import Contacts from "./Contacts";
import PredictPage from "../../pages/predictionPage/PredictPage";

function Dashy() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar isSidebar={isSidebar} />
            <Routes>
              <Route path="/team" element={<Team />} />
              <Route path="/main" element={<HomeDashy />} />
              <Route path="/getPredict" element={<PredictPage />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dashy;
