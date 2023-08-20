import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
/*import { Route, Routes } from "react-router-dom";*/

import { ToastContainer, toast } from "react-toastify";
import Footer from "./containers/footer/Footer";
import Home from "./containers/Home";
import { Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./containers/blog/Blog";
import Possibility from "./containers/possibility/Possibility";
import WhatDiag from "./containers/whatDiag/WhatDiag";
/*import Login from "./pages/authentication/authentication3/Login3";*/
//import Register from "./pages/authentication/authentication3/Register3";
import Register from "./pages/YoussafREG/SignUp";
import Login from "./pages/YoussafREG/Login";
import ForgotPassword from "./pages/YoussafREG/ForgotPassword";
import ResetPassword from "./pages/YoussafREG/ResetPassword";
import HomeDash from "./containers/dashboard/HomeDash";
import Mydash from "./pages/Mydash";
import LandingPage from "./containers/LandingPage";
import Team from "./scenes/global/Team";
import Invoices from "./scenes/global/Invoices";
import Contacts from "./scenes/global/Contacts";
import Form from "./scenes/global/Form";
import FAQ from "./scenes/global/Faq";
import HomeDashy from "./scenes/dashboard";
import PredictPage from "./pages/predictionPage/PredictPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RequireAuth from "./components/RequireAuth";
import Dashy from "./scenes/global/Dashy";
import Layout from "./components/Layout";

const App = () => {
  return (
    // <div className="App">
    //   <ToastContainer />
    //   <div className="gradient__bg">{true && <Navbar />} </div>

    //   <Routes>
    //     <Route>
    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/about" element={<About />} />
    //       <Route exact path="/blogs" element={<Blog />} />
    //       <Route exact path="/docs" element={<Possibility />} />
    //       <Route exact path="/srvcs" element={<WhatDiag />} />
    //       <Route exact path="/signUP" element={<Register />} />
    //       <Route exact path="/pages/register/login3" element={<Login />} />
    //       <Route
    //         exact
    //         path="/pages/register/register3"
    //         element={<Register />}
    //       />
    //     </Route>
    //   </Routes>

    //   <div>{true && <Footer />}</div>
    // </div>

    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<LandingPage />} />

          <Route exact path="/signUP" element={<Register />} />
          <Route exact path="/signIN" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/reset_password/:id/:token"
            element={<ResetPassword />}
          ></Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard/" element={<Dashy />}>
              <Route path="/dashboard/main" element={<HomeDashy />} />
              <Route path="/dashboard/team" element={<Team />} />
              <Route path="/dashboard/getPredict" element={<PredictPage />} />
              <Route path="/dashboard/invoices" element={<Invoices />} />
              <Route path="/dashboard/contacts" element={<Contacts />} />
              <Route path="/dashboard/form" element={<Form />} />
              <Route path="/dashboard/faq" element={<FAQ />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
